import { IUserScheme } from "~~/types/user";
import { UserModel } from "../models/users.model";
import { connectDB } from "../utils/db";

export type CreateUserInput = IUserScheme;
export type EditUserInput = Partial<IUserScheme>;

export const getAllUsers = async () => {
  await connectDB();
  return UserModel.find().sort({ createdAt: -1 }).lean();
};

export const getUserById = async (id: string) => {
  await connectDB();
  return UserModel.findById(id).lean();
};

export const createUser = async (payload: CreateUserInput) => {
  await connectDB();
  return UserModel.create(payload);
};

export const updateUserById = async (id: string, payload: EditUserInput) => {
  await connectDB();

  const updated = await UserModel.findOneAndUpdate({ _id: id }, payload, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!updated) {
    throw createError({
      statusCode: 404,
      statusMessage: `User with id "${id}" not found.`,
    });
  }

  return updated;
};

export const deleteUserById = async (id: string) => {
  await connectDB();

  const deleted = await UserModel.findOneAndDelete({ _id: id });

  if (!deleted) {
    throw createError({
      statusCode: 404,
      statusMessage: `User with id "${id}" not found.`,
    });
  }

  return deleted;
};
