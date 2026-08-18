import mongoose, { type Document, type Model } from "mongoose";
import type { IProjectScheme } from "~~/types/project";

const { Schema, model, models } = mongoose;

export interface IProjectDocument extends IProjectScheme, Document {
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProjectDocument>(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    thumbnail: { type: String, required: true },
    liveLink: { type: String, default: null },
    githubLink: { type: String, default: null },
    details: { type: String, required: true },
    tags: { type: [String], default: [] },
    summary: { type: String, required: true },
    status: {
      type: String,
      enum: ["published", "draft", "archieved"],
      default: "draft",
    },
    isShowcase: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const ProjectModel: Model<IProjectDocument> =
  (models.Project as Model<IProjectDocument>) ||
  model<IProjectDocument>("Project", ProjectSchema);
