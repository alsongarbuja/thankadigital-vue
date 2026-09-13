import { getAllCareers } from "~~/server/services/career.service";

/**
 * Event handler to handle the /api/careers GET API
 * Returns all careers list
 * */
export default defineEventHandler(async (event) => {
  return getAllCareers();
});
