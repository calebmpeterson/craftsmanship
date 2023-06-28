import colors from "@/styles/colors";
import { GAP } from "@/styles/constants";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

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
    background-position: center center;

    > * {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 ${GAP}px;
    }
  }
`;

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <motion.div
    css={layoutCss}
    initial={{ opacity: 0, scale: 1.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    transition={{ ease: "easeInOut", duration: 0.3 }}
  >
    {children}
  </motion.div>
);
