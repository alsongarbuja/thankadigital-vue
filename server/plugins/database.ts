import mongoose from "mongoose";

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
});
