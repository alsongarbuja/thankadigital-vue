import { ITeamScheme } from "~~/types/team";
import { createTeam } from "../../services/team.service";

const REQUIRED_FIELDS: (keyof ITeamScheme)[] = ["name"];

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<ITeamScheme>>(event);

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      throw createError({
        statusCode: 400,
        statusMessage: `"${field}" is required.`,
      });
    }
  }

  const team = await createTeam({
    name: body.name!,
    description: body.description,
  });

  setResponseStatus(event, 201);
  return team;
});
