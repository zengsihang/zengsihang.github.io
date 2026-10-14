export interface LinkItem {
  label: string;
  href: string;
}

export interface NewsItem {
  date: string;
  /** May contain inline HTML (emphasis and links only). */
  text: string;
}

export type PublicationKind = "journal" | "conference" | "preprint" | "abstract" | "thesis";

export interface Publication {
  title: string;
  /**
   * Ordered author list. `AUTHOR_SELF` is rendered in bold; a trailing "*"
   * marks equal contribution; "…" elides authors; a final "et al." truncates.
   */
  authors: string[];
  venue: string;
  /** Volume, pages, or other locator shown after the venue. */
  venueDetail?: string;
  year: number;
  kind: PublicationKind;
  /** Recognition shown highlighted, e.g. "Spotlight" or "Oral presentation". */
  distinction?: string;
  /** Publication status, e.g. "Under review at …". */
  note?: string;
  /** The first link also becomes the title's hyperlink. */
  links: LinkItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  /** May contain inline HTML (emphasis and links only). */
  detail?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface TalkItem {
  title: string;
  venue: string;
  date: string;
}

export interface AwardItem {
  year: string;
  title: string;
}
