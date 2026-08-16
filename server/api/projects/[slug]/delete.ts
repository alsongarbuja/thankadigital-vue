import { deleteProjectBySlug } from "../../../services/project.service";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Missing slug." });
  }

  await deleteProjectBySlug(slug);

  setResponseStatus(event, 204);
  return null;
});
