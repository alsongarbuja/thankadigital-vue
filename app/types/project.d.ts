interface IProjectScheme {
  name: string;
  slug: string;
  thumbnail: string;
  liveLink: string | null;
  githubLink: string | null;

  details: string;
  tags: string[];

  summary: string;

  status: "published" | "draft" | "archieved";

  isShowcase: boolean;
}
