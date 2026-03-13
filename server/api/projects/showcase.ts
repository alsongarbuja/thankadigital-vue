import { Project } from "~~/server/models/Project";

/**
 * Event handler to handle the /api/projects/showcase GET API
 * Returns projects list that is published and showcase true
 * */
export default defineEventHandler(async (event) => {
  try {
    const projects = await Project.find({
      status: "published",
      isShowcase: true,
    });
    return projects;
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
