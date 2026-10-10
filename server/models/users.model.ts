import mongoose, { type Document, type Model } from "mongoose";
import type { IUserScheme } from "~~/types/user";

const { Schema, model, models } = mongoose;

export interface IUserDocument extends Omit<IUserScheme, "_id">, Document {
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
      type: String,
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

userSchema.pre("save", async function () {
  if (this.isModified("passPin")) {
    this.passPin = await hashPassword(this.passPin);
  }
});

userSchema.pre("findOneAndUpdate", async function () {
  const update = this.getUpdate() as Partial<IUserDocument>;
  if (update.passPin) {
    update.passPin = await hashPassword(update.passPin);
  }
});

export const UserModel: Model<IUserDocument> =
  (models.User as Model<IUserDocument>) ||
  model<IUserDocument>("User", userSchema);