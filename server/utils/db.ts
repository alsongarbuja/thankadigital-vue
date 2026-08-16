import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConn: Promise<typeof mongoose> | undefined;
}

/**
 * Reuses a single connection across requests (and across dev hot-reloads),
 * instead of opening a new one on every API call.
 */
export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing MONGODB_URI environment variable.",
    });
  }

  if (!global._mongooseConn) {
    global._mongooseConn = mongoose.connect(uri, {
      bufferCommands: false,
    });
  }

  return global._mongooseConn;
};
