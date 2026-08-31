import { deleteTeamById } from "~~/server/services/team.service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  await deleteTeamById(id);

  setResponseStatus(event, 204);
  return null;
});
