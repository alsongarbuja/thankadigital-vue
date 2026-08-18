import { updateCareerById } from "~~/server/services/career.service";
import { ICareerScheme } from "~~/types/career";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id." });
  }

  const body = await readBody<Partial<ICareerScheme>>(event);

  return updateCareerById(id, body);
});
