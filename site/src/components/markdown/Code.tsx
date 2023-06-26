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

const frameCss = css`
  position: absolute;

  .vertical {
    position: absolute;
    height: 100px;
  }

  .horizontal {
    position: absolute;
    width: 100px;
  }
`;

const OFFSET = -GAP / 2;

const frameBeforeCss = css`
  ${frameCss}
  top: -${GAP / 2}px;
  left: -${GAP / 2}px;

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
  bottom: -${GAP / 2}px;
  right: -${GAP / 2}px;

  .vertical {
    bottom: ${OFFSET}px;
    border-left: 1px solid ${FRAME_COLOR};
  }

  .horizontal {
    right: ${OFFSET}px;
    border-top: 1px solid ${FRAME_COLOR};
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
