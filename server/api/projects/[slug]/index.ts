import { getProjectBySlug } from "~~/server/services/project.service";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Missing slug." });
  }

  const project = await getProjectBySlug(slug);

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project with slug "${slug}" not found.`,
    });
  }

  return project;
});
