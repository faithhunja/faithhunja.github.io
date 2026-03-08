import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Faith Hunja",
  // EMAIL: "faithhunja17{at}gmail{dot}com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Faith Hunja's portfolio website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my articles.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects.",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION: "A list of my publications.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/faithhunja",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/faithhunja"
  },
  { 
    NAME: "dev.to",
    HREF: "https://dev.to/faithhunja"
  },
  { 
    NAME: "orcid",
    HREF: "https://orcid.org/0000-0001-5747-0247"
  }
];
