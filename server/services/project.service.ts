import { IProjectScheme } from "~~/types/project";
import { ProjectModel } from "../models/project.model";
import { connectDB } from "../utils/db";

export type CreateProjectInput = IProjectScheme;
export type UpdateProjectInput = Partial<IProjectScheme>;

export const getAllProjects = async () => {
  await connectDB();
  return ProjectModel.find().sort({ createdAt: -1 }).lean();
};

export const getShowchaseProjects = async () => {
  await connectDB();
  return ProjectModel.find({ status: "published", isShowcase: true })
    .sort({ createdAt: -1 })
    .lean();
};

export const getProjectBySlug = async (slug: string) => {
  await connectDB();
  return ProjectModel.findOne({ slug }).lean();
};

export const createProject = async (payload: CreateProjectInput) => {
  await connectDB();

  const existing = await ProjectModel.findOne({ slug: payload.slug }).lean();
  if (existing) {
    throw createError({
      statusCode: 409,
      statusMessage: `A project with slug "${payload.slug}" already exists.`,
    });
  }

  return ProjectModel.create(payload);
};

export const updateProjectBySlug = async (
  slug: string,
  payload: UpdateProjectInput,
) => {
  await connectDB();

  console.log(payload.slug, slug);

  if (payload.slug && payload.slug !== slug) {
    const clashing = await ProjectModel.findOne({ slug: payload.slug }).lean();
    if (clashing) {
      throw createError({
        statusCode: 409,
        statusMessage: `A project with slug "${payload.slug}" already exists.`,
      });
    }
  }

  const updated = await ProjectModel.findOneAndUpdate({ slug }, payload, {
    new: true,
    runValidators: true,
  });

  if (!updated) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project with slug "${slug}" not found.`,
    });
  }

  return updated;
};

export const deleteProjectBySlug = async (slug: string) => {
  await connectDB();

  const deleted = await ProjectModel.findOneAndDelete({ slug });

  if (!deleted) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project with slug "${slug}" not found.`,
    });
  }

  return deleted;
};
