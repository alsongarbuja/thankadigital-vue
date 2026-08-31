import { deleteUserById } from "~~/server/services/user.service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  await deleteUserById(id);

  setResponseStatus(event, 204);
  return null;
});
