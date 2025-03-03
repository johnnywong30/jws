export type LocationType = "remote" | "hybrid" | "on-site";

export type Experience = {
  id: number;
  title: string;
  company: string;
  bullets: string[];
  startDate: number;
  endDate?: number;
  companyLink: string;
  deleted: boolean;
  salary?: number;
  benefits: string[];
  technologies: string[];
  locationType: LocationType;
};
