import mongoose, { type Document, type Model } from "mongoose";
import type { ICareerScheme } from "~~/types/career";

const { Schema, model, models } = mongoose;

export interface ICareerDocument extends ICareerScheme, Document {
  createdAt: Date;
  updatedAt: Date;
}

const careerSchema = new Schema<ICareerDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    salary_min: {
      type: Number,
      required: true,
    },
    salary_max: {
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

export const CareerModel: Model<ICareerDocument> =
  (models.Project as Model<ICareerDocument>) ||
  model<ICareerDocument>("Career", careerSchema);
