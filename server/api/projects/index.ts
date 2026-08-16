import { getAllProjects } from "~~/server/services/project.service";

/**
 * Event handler to handle the /api/projects GET API
 * Returns projects list that is published
 * */
export default defineEventHandler(async (event) => {
  return getAllProjects();
});
