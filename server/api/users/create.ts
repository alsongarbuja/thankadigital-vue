import { IUserScheme } from "~~/types/user";
import { createUser } from "../../services/user.service";

const REQUIRED_FIELDS: (keyof IUserScheme)[] = ["name"];

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<IUserScheme>>(event);

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      throw createError({
        statusCode: 400,
        statusMessage: `"${field}" is required.`,
      });
    }
  }

  const user = await createUser(body as IUserScheme);

  setResponseStatus(event, 201);
  return user;
});
