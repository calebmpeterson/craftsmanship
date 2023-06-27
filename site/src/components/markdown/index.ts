import { ComponentType, FC, PropsWithChildren } from "react";
import { Code } from "./Code";
import { Components } from "react-markdown";

export const components: Components = {
  code: Code,
};
