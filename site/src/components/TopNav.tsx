import { css } from "@emotion/react";
import { FC, Fragment, PropsWithChildren } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiMathCompass, mdiRulerSquare } from "@mdi/js";
import colors from "../styles/colors";
import Link from "next/link";
import { Layout } from "./Layout";
import { GAP } from "@/styles/constants";

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
  padding: 10px ${GAP}px;
  border-bottom: 1px solid ${colors.slate[300]};
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
  width: 25%;
`;

const logoCss = css``;

export const TopNav: FC<PropsWithChildren<Props>> = ({
  hasHomeLink,
  title,
  children,
}) => {
  return (
    <div css={containerCss}>
      <div css={leftLayoutCss}>
        {hasHomeLink && (
          <Fragment>
            <Link data-button href="/">
              <Icon path={mdiArrowLeft} size={1} />
            </Link>

            <div>Guidelines</div>
          </Fragment>
        )}
      </div>
      <div>
        {title ? (
          <strong>{title}</strong>
        ) : (
          <Icon path={mdiMathCompass} size={1} color="currentColor" />
        )}
      </div>
      <div css={rightLayoutCss}>{children}</div>
    </div>
  );
};
