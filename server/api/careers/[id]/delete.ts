import { deleteCareerById } from "~~/server/services/career.service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  await deleteCareerById(id);

  setResponseStatus(event, 204);
  return null;
});
