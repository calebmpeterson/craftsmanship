import path from "node:path";

export const getGuidelinesRoot = () =>
  path.normalize(path.join(process.cwd(), ".."));
