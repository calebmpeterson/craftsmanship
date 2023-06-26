import colors from "@/styles/colors";
import { GAP } from "@/styles/constants";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

const layoutCss = css`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > main {
    overflow: auto;
    height: 100%;
    padding: ${GAP}px 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    background-image: radial-gradient(${colors.slate[300]} 1px, transparent 0);
    background-size: ${GAP}px ${GAP}px;

    > * {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 ${GAP}px;
    }
  }
`;

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div css={layoutCss}>{children}</div>
);
