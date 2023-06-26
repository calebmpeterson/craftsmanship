import { css } from "@emotion/react";

type FlexboxProps = {
  direction?: "row" | "column";
  justify?: "space-between" | "center" | "start" | "end";
  align?: "center";
  gap?: string;
  height?: string;
};

export const flexboxCss = ({
  direction,
  justify,
  align,
  gap,
  height = "100%",
}: FlexboxProps) => [
  css`
    display: flex;
    height: ${height};
  `,
  direction &&
    css`
      flex-direction: ${direction};
    `,
  justify &&
    css`
      justify-content: ${justify};
    `,
  align &&
    css`
      align-items: ${align};
    `,
  gap &&
    css`
      gap: ${gap};
    `,
];
