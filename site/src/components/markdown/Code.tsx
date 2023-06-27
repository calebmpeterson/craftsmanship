import colors from "@/styles/colors";
import { GAP } from "@/styles/constants";
import { css } from "@emotion/react";
import { CodeComponent } from "react-markdown/lib/ast-to-react";

interface Props {
  inline: boolean;
  className?: string;
}

const codeCss = (inline: boolean | undefined, avoid?: boolean) => [
  css`
    --border-color: ${avoid ? colors.red[200] : colors.slate[300]};
    color: ${avoid ? colors.red[800] : colors.sky[800]};
  `,
  inline
    ? css``
    : css`
        position: relative;
        display: block;
        margin: ${GAP * 2}px ${GAP}px;
      `,
];

const FRAME_COLOR = "var(--border-color)";

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
    width: 33%;
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

export const Code: CodeComponent = ({ inline, className, children }) => (
  <code css={codeCss(inline, className?.endsWith(".avoid"))}>
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
