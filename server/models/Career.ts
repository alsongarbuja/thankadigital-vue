import { Schema, model } from "mongoose";

const careerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    salary_min: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["on-site", "remote", "hybrid"],
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    responsibilities: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: ["published", "draft", "archieved"],
      default: "draft",
    },
  },
  { timestamps: true },
);

export const Career = model("Career", careerSchema);
