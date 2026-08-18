import { getAllCareers } from "~~/server/services/career.service";

/**
 * Event handler to handle the /api/careers GET API
 * Returns careers list that is published
 * */
export default defineEventHandler(async (event) => {
  return getAllCareers();
});
