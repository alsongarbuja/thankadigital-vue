import { Career } from "~~/server/models/Career";

/**
 * Event handler to handle the /api/careers GET API
 * Returns careers list that is published
 * */
export default defineEventHandler(async (event) => {
  try {
    const careers = await Career.find({
      status: "published",
    });
    return careers;
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
