export type Project = {
  id: number;
  title: string;
  summary: string;
  bullets: string[];
  repositoryUrl: string;
  liveUrl?: string;
  deleted: boolean;
  technologies: string[];
};
