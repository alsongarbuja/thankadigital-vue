import { IProjectScheme } from "~~/types/project";
import { createProject } from "../../services/project.service";

const REQUIRED_FIELDS: (keyof IProjectScheme)[] = [
  "name",
  "slug",
  "thumbnail",
  "details",
  "summary",
];

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<IProjectScheme>>(event);

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      throw createError({
        statusCode: 400,
        statusMessage: `"${field}" is required.`,
      });
    }
  }

  const project = await createProject({
    name: body.name!,
    slug: body.slug!,
    thumbnail: body.thumbnail!,
    liveLink: body.liveLink ?? null,
    githubLink: body.githubLink ?? null,
    details: body.details!,
    tags: body.tags ?? [],
    summary: body.summary!,
    status: body.status ?? "draft",
    isShowcase: body.isShowcase ?? false,
  });

  setResponseStatus(event, 201);
  return project;
});
