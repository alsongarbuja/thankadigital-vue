import { ITeamScheme } from "~~/types/team";
import { TeamModel } from "../models/team.model";
import { connectDB } from "../utils/db";

export type CreateTeamInput = ITeamScheme;
export type EditTeamInput = Partial<ITeamScheme>;

export const getAllTeams = async () => {
  await connectDB();
  return TeamModel.find().sort({ createdAt: -1 }).lean();
};

export const getTeamById = async (id: string) => {
  await connectDB();
  return TeamModel.findById(id).lean();
};

export const createTeam = async (payload: CreateTeamInput) => {
  await connectDB();
  return TeamModel.create(payload);
};

export const updateTeamById = async (id: string, payload: EditTeamInput) => {
  await connectDB();

  const updated = await TeamModel.findOneAndUpdate({ _id: id }, payload, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!updated) {
    throw createError({
      statusCode: 404,
      statusMessage: `Team with id "${id}" not found.`,
    });
  }

  return updated;
};

export const deleteTeamById = async (id: string) => {
  await connectDB();

  const deleted = await TeamModel.findOneAndDelete({ _id: id });

  if (!deleted) {
    throw createError({
      statusCode: 404,
      statusMessage: `Team with id "${id}" not found.`,
    });
  }

  return deleted;
};
