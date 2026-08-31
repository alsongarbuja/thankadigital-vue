import mongoose, { type Document, type Model } from "mongoose";
import type { ITeamScheme } from "~~/types/team";

const { Schema, model, models } = mongoose;

export interface ITeamDocument extends ITeamScheme, Document {
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<ITeamDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

export const TeamModel: Model<ITeamDocument> =
  (models.Team as Model<ITeamDocument>) ||
  model<ITeamDocument>("Team", teamSchema);
