export type Project = {
  id: number;
  title: string;
  summary: string;
  bullets: string[];
  repositoryUrl: string;
  liveUrl?: string;
  startDate: number;
  endDate?: number;
  archived?: boolean;
  deleted: boolean;
  technologies: string[];
};
