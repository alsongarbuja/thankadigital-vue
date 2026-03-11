import { model, Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String || null,
      default: null,
    },
    githubLink: {
      type: String || null,
      default: null,
    },

    details: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    summary: {
      type: String,
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

export const Project = model("Project", projectSchema);
