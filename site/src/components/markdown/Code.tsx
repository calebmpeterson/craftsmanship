import colors from "@/styles/colors";
import { GAP } from "@/styles/constants";
import { withAlpha } from "@/styles/utils";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

interface Props {
  inline: boolean;
}

const codeCss = (inline: boolean) => [
  css``,
  inline
    ? css``
    : css`
        position: relative;
        display: block;
        margin: ${GAP * 2}px ${GAP}px;
      `,
];

const FRAME_COLOR = colors.slate[300];

const OFFSET = -GAP;

const frameCss = css`
  position: absolute;
  width: 100%;
  height: 100%;

  .vertical {
    position: absolute;
    height: calc(100% + ${GAP * 2}px);
  }

  .horizontal {
    position: absolute;
    width: 100px;
  }
`;

const frameBeforeCss = css`
  ${frameCss}
  top: -${GAP}px;
  left: -${GAP}px;

  .vertical {
    top: ${OFFSET}px;
    border-left: 1px solid ${FRAME_COLOR};
  }

  .horizontal {
    left: ${OFFSET}px;
    border-top: 1px solid ${FRAME_COLOR};
  }
`;

const frameAfterCss = css`
  ${frameCss}
  bottom: -${GAP}px;
  right: -${GAP}px;

  .vertical {
    bottom: ${OFFSET}px;
    right: 0;
    border-right: 1px solid ${FRAME_COLOR};
  }

  .horizontal {
    bottom: 0;
    right: ${OFFSET}px;
    border-bottom: 1px solid ${FRAME_COLOR};
  }
`;

export const Code: FC<PropsWithChildren<Props>> = ({ inline, children }) => (
  <code css={codeCss(inline)}>
    {!inline && (
      <div css={frameBeforeCss}>
        <div className="vertical" />
        <div className="horizontal" />
      </div>
    )}
    {children}
    {!inline && (
      <div css={frameAfterCss}>
        <div className="vertical" />
        <div className="horizontal" />
      </div>
    )}
  </code>
);
