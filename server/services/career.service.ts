import { ICareerScheme } from "~~/types/career";
import { CareerModel } from "../models/career.model";
import { connectDB } from "../utils/db";

export type CreateCareerInput = ICareerScheme;
export type EditCareerInput = Partial<ICareerScheme>;

export const getAllCareers = async () => {
  await connectDB();
  return CareerModel.find().sort({ createdAt: -1 }).lean();
};

export const getActiveCareers = async () => {
  await connectDB();
  return CareerModel.find({ status: "published" })
    .sort({ createdAt: -1 })
    .lean();
};

export const getCareerById = async (id: string) => {
  await connectDB();
  return CareerModel.findById(id).lean();
};

export const createCareer = async (payload: CreateCareerInput) => {
  await connectDB();
  return CareerModel.create(payload);
};

export const updateCareerById = async (
  id: string,
  payload: EditCareerInput,
) => {
  await connectDB();

  const updated = await CareerModel.findOneAndUpdate({ _id: id }, payload, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!updated) {
    throw createError({
      statusCode: 404,
      statusMessage: `Career with id "${id}" not found.`,
    });
  }

  return updated;
};

export const deleteCareerById = async (id: string) => {
  await connectDB();

  const deleted = await CareerModel.findOneAndDelete({ _id: id });

  if (!deleted) {
    throw createError({
      statusCode: 404,
      statusMessage: `Career with id "${id}" not found.`,
    });
  }

  return deleted;
};
