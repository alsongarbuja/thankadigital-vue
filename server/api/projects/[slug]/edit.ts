import { IProjectScheme } from "~~/types/project";
import { updateProjectBySlug } from "../../../services/project.service";
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Missing slug." });
  }

  const body = await readBody<Partial<IProjectScheme>>(event);

  return updateProjectBySlug(slug, body);
});
