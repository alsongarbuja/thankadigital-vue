import { updateUserById } from "~~/server/services/user.service";
import { IUserScheme } from "~~/types/user";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  const body = await readBody<Partial<IUserScheme>>(event);

  return updateUserById(id, body);
});
