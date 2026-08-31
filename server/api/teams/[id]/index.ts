import { getTeamById } from "~~/server/services/team.service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  const team = await getTeamById(id);

  if (!team) {
    throw createError({
      statusCode: 404,
      statusMessage: `Team with id "${id}" not found.`,
    });
  }

  return team;
});
