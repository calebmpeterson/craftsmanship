import { readdir } from "fs/promises";
import { getGuidelinesRoot } from "./getGuidelinesRoot";
import path from "path";

export const getGuidelinesSlugs = async () => {
  const rootDir = getGuidelinesRoot();
  const filenames = await readdir(rootDir);
  const guidelines = filenames.filter((filename) => filename.endsWith(".md"));
  const slugs = guidelines.map((filename) => path.basename(filename, ".md"));

  return slugs;
};
