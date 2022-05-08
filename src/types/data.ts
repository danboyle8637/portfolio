import { ImageOrientation } from "./components";

type Category =
  | "copywriting"
  | "ad_writing"
  | "graphic_design"
  | "website"
  | "app"
  | "full_stack";

export type Business = "this_time_fitness" | "fww" | "personal";

export interface Project {
  id: number;
  business: Business;
  category: Category[];
  title: string;
  description: string[];
  slug: string;
  projectUrl?: string;
  gitHubUrl?: string;
  technologies?: Techology[];
  imageUrl: string;
  altTag: string;
  titleTag: string;
  imageOrientation: ImageOrientation;
}

export interface MarketingProjectListing {
  id: number;
  category: Category[];
  title: string;
  description: string[];
  slug: string;
  projectUrl?: string;
  imageUrl: string;
  altTag: string;
  titleTag: string;
}

export type Techology =
  | "react"
  | "typescript"
  | "nextjs"
  | "cloudflare"
  | "node"
  | "service_workers";

export interface DevelopmentProjectListing {
  id: number;
  title: string;
  description: string[];
  technologiesUsed: Techology[];
  slug: string;
  imageUrl: string;
  altTag: string;
  titleTag: string;
}
