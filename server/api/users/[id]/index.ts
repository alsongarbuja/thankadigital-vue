import { getUserById } from "~~/server/services/user.service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  const user = await getUserById(id);

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: `User with id "${id}" not found.`,
    });
  }

  return user;
});
