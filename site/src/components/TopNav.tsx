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
        {hasHomeLink ? (
          <Link data-button href="/">
            <Icon path={mdiArrowLeft} />
          </Link>
        ) : (
          <div css={logoCss}>
            <Icon
              path={mdiRulerSquare}
              size={1}
              rotate={-45}
              color={colors.slate[700]}
            />
          </div>
        )}
        <div>Guidelines</div>
      </div>
      <div>
        <strong>{title}</strong>
      </div>
      <div css={rightLayoutCss}>{children}</div>
    </div>
  );
};
