export interface LinkItem {
  label: string;
  href: string;
}

export interface SocialLink extends LinkItem {
  /** Key used to pick the inline icon in components/Icon.astro */
  icon: "scholar" | "github" | "linkedin" | "orcid" | "email" | "twitter";
}

export interface Metric {
  value: string;
  label: string;
}

export interface SiteProfile {
  name: string;
  role: string;
  affiliation: string;
  affiliationHref?: string;
  group?: string;
  groupHref?: string;
  location: string;
  email: string;
  headshot: string;
  tagline: string;
  /** Paragraphs of the About section. May contain inline HTML (links only). */
  bio: string[];
  socialLinks: SocialLink[];
  metrics: Metric[];
  metricsNote: string;
}

export interface FocusArea {
  title: string;
  description: string;
  tags: string[];
}

export type NewsCategory = "paper" | "award" | "career" | "milestone";

export interface NewsItem {
  date: string;
  /** ISO date used for sorting and <time datetime="..."> */
  iso: string;
  title: string;
  detail?: string;
  href?: string;
  category: NewsCategory;
}

export type PublicationKind =
  | "journal"
  | "conference"
  | "preprint"
  | "abstract"
  | "thesis";

export interface Publication {
  title: string;
  /** Ordered author list. `AUTHOR_SELF` is rendered with emphasis. */
  authors: string[];
  venue: string;
  /** Volume, pages, or other locator shown after the venue. */
  venueDetail?: string;
  year: number;
  kind: PublicationKind;
  /** Short badge such as "Spotlight" or "1st place". */
  note?: string;
  summary?: string;
  tags?: string[];
  links: LinkItem[];
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  /** Bullet lines. May contain inline HTML (links only). */
  details: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  organizationHref?: string;
  period: string;
  description: string;
}

export interface AwardItem {
  year: string;
  title: string;
  detail?: string;
}

export interface ServiceGroup {
  label: string;
  items: string[];
}
