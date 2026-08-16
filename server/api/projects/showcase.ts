import { getShowchaseProjects } from "~~/server/services/project.service";

/**
import { getShowchaseProjects } from "~~/server/services/project.service";
 * Event handler to handle the /api/projects/showcase GET API
 * Returns projects list that is published and showcase true
 * */
export default defineEventHandler(async (event) => {
  return getShowchaseProjects();
});
