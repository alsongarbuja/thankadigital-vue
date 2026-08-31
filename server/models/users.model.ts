import mongoose, { type Document, type Model } from "mongoose";
import type { IUserScheme } from "~~/types/user";

const { Schema, model, models } = mongoose;

export interface IUserDocument extends IUserScheme, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passPin: {
      type: Number,
      required: true,
    },
    avatarUrl: {
      type: String,
    },
    isLoggable: {
      type: Boolean,
      default: false,
    },
    teamId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const UserModel: Model<IUserDocument> =
  (models.User as Model<IUserDocument>) ||
  model<IUserDocument>("User", userSchema);
