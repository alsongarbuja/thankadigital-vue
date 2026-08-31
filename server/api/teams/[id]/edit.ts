import { updateTeamById } from "~~/server/services/team.service";
import { ITeamScheme } from "~~/types/team";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  const body = await readBody<Partial<ITeamScheme>>(event);

  return updateTeamById(id, body);
});
