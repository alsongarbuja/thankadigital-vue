export type ICareerScheme = {
  title: string;
  salary_min: number;
  salary_max: number;
  type: "on-site" | "remote" | "hybrid";
  experience: string;
  requirements: string[];
  responsibilities: string[];
  status: "published" | "draft" | "archieved";
};
