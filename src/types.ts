export interface LinkItem {
  label: string;
  href: string;
}

export interface SiteProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  shortBio: string;
  longBio: string;
  heroStatement: string;
  heroDetail: string;
  headshot: string;
  socialLinks: LinkItem[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
}

export interface FocusArea {
  title: string;
  description: string;
  tags: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  detail: string;
  href?: string;
  category: "paper" | "award" | "career" | "milestone";
}

export interface Publication {
  title: string;
  year: number;
  venue: string;
  authors: string;
  summary: string;
  tags: string[];
  links: LinkItem[];
  featured?: boolean;
  note?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface VisitAggregate {
  country: string;
  city?: string;
  latitude: number;
  longitude: number;
  count: number;
  lastSeen?: string;
}
