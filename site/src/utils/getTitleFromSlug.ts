import { startCase } from "lodash";

export const getTitleFromSlug = (slug: string) =>
  startCase(slug.replace(/-/g, " "));
