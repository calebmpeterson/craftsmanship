import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiRulerSquare } from "@mdi/js";
import colors from "../styles/colors";
import Link from "next/link";
import { Layout } from "./Layout";

interface Props {
  title?: string;
  hasHomeLink?: boolean;
}

const containerCss = css`
  display: flex;
  align-items: center;
  height: 57px;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${colors.slate[100]};
  padding: 10px;
  border-top: 1px solid ${colors.slate[300]};
  font-size: 12px;
  color: ${colors.slate[600]};
`;

const leftLayoutCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 25%;
`;

const rightLayoutCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: end;
`;

export const Footer: FC<PropsWithChildren<Props>> = ({
  hasHomeLink,
  title,
  children,
}) => {
  return (
    <div css={containerCss}>
      <div css={leftLayoutCss}>
        <div>&copy; Copyright Caleb Peterson</div>
      </div>
      <div>{children}</div>
      <div css={rightLayoutCss}>Soli Deo Gloria</div>
    </div>
  );
};
