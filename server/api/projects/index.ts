import { Project } from "~~/server/models/Project";

export default defineEventHandler(async (event) => {
  try {
    const projects = await Project.find({ status: "published" });
    return projects;
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
