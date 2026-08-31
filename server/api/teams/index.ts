import { getAllTeams } from "~~/server/services/team.service";

/**
 * Event handler to handle the /api/teams GET API
 * Returns teams list that is published
 * */
export default defineEventHandler(async (event) => {
  return getAllTeams();
});
