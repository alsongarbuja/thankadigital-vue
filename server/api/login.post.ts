import { findUserByEmail } from "../services/user.service";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ userId: string; password: string }>(event);

  if (!body.userId || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: "User ID and PIN are required.",
    });
  }

  const user = await findUserByEmail(body.userId);

  if (!user || !user.isLoggable) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials.",
    });
  }

  const isValidPin = await verifyPassword(user.passPin, body.password);

  if (!isValidPin) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials.",
    });
  }

  await setUserSession(event, {
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      teamId: user.teamId,
      avatarUrl: user.avatarUrl,
    },
  });

  return { ok: true };
});
