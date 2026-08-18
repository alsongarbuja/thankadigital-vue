import { getCareerById } from "~~/server/services/career.service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  const career = await getCareerById(id);

  if (!career) {
    throw createError({
      statusCode: 404,
      statusMessage: `Career with id "${id}" not found.`,
    });
  }

  return career;
});
