import { ICareerScheme } from "~~/types/career";
import { createCareer } from "../../services/career.service";

const REQUIRED_FIELDS: (keyof ICareerScheme)[] = [
  "title",
  "requirements",
  "responsibilities",
  "experience",
  "salary_max",
  "salary_min",
  "type",
];

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<ICareerScheme>>(event);

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      throw createError({
        statusCode: 400,
        statusMessage: `"${field}" is required.`,
      });
    }
  }

  const career = await createCareer({
    title: body.title!,
    status: body.status ?? "draft",
    responsibilities: body.responsibilities!,
    requirements: body.requirements!,
    type: body.type!,
    experience: body.experience!,
    salary_max: body.salary_max!,
    salary_min: body.salary_min!,
  });

  setResponseStatus(event, 201);
  return career;
});
