import { css } from "@emotion/react";
import colors from "./colors";
import { transition } from "./transition";
import { map } from "lodash";
import { withAlpha } from "./utils";
import { GAP } from "./constants";

export const shadow = css`
  box-shadow: 5px 5px 13px 5px ${withAlpha(colors.slate[300], 0.7)},
    2px 2px 3px 1px ${withAlpha(colors.slate[500], 0.7)},
    -5px -5px 13px 5px ${withAlpha(colors.sky[200], 0.7)},
    -2px -2px 3px 1px ${withAlpha(colors.sky[400], 0.7)};
`;

const createTextColorRules = () =>
  map(
    colors.slate,
    (color, shade) => css`
      [data-color="${shade}"] {
        color: ${color};
      }
    `
  );

export const globalCss = css`
  :root {
    font-family: monospace;
    font-size: 16px;
    line-height: ${GAP}px;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: ${colors.slate[100]};
    color: ${colors.slate[700]};

    /* Set the color of the scrollbar track */
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    /* Set the color of the scrollbar thumb */
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.slate[500]};
    }

    /* Set the color of the scrollbar thumb on hover */
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${colors.slate[600]};
    }

    scrollbar-color: ${colors.slate[500]} transparent;
  }

  ::selection {
    background-color: ${colors.slate[600]};
    color: ${colors.slate[50]};
  }

  p {
    margin: ${GAP}px 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin: ${GAP}px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${GAP}px;
    align-items: start;
  }

  li {
    padding: 0;
    list-style: none;
  }

  li > a {
    position: relative;
    padding: 5px;

    &:before {
      content: "";
      position: absolute;
      height: calc(100% + 10px);
      border-left: 1px solid ${colors.slate[300]};
      left: -5px;
      transition: ${transition("border-color")};
    }

    &:after {
      content: "";
      position: absolute;
      width: calc(100% + 30px);
      border-bottom: 1px solid ${colors.slate[300]};
      left: -15px;
      bottom: 0;
      transition: ${transition("border-color", "width")};
    }

    &:hover {
      &:before {
        border-left-color: ${colors.sky[700]};
      }
      &:after {
        border-bottom-color: ${colors.sky[700]};
        width: calc(100% + 100px);
      }
    }
  }

  strong {
    color: ${colors.slate[700]};
  }

  blockquote {
    position: relative;
    margin: ${GAP}px ${GAP / 2}px;
    padding: ${GAP}px ${GAP / 2}px;
    font-style: italic;
    color: ${colors.slate[800]};

    border-left: 1px solid ${colors.slate[300]};

    &:before {
      content: "";
      position: absolute;
      width: calc(33%);
      border-top: 1px solid ${colors.slate[300]};
      left: -10px;
      top: ${GAP / 2}px;
    }

    &:after {
      content: "";
      position: absolute;
      width: calc(66%);
      border-bottom: 1px solid ${colors.slate[300]};
      left: -15px;
      bottom: ${GAP / 2}px;
    }
  }

  code {
    color: ${colors.sky[800]};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: ${GAP}px;

    & > legend {
      font-weight: bold;
      color: ${colors.slate[800]};
      padding: 0;
      margin: 0;
    }

    & [data-form-actions] {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 5px;
    }
  }

  input,
  textarea {
    font-family: inherit;
    font-size: 90%;
    background-color: inherit;
    padding: ${GAP}px;
    border-radius: 5px;
    border: 1px solid ${colors.slate[800]};

    transition: ${transition("box-shadow", "background-color")};

    &:focus {
      outline: none;
      ${shadow}
    }

    &[readonly] {
      background-color: ${colors.slate[100]};
      color: ${colors.slate[600]};
    }
  }

  textarea {
    min-height: 300px;
  }

  a {
    color: ${colors.slate[700]};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    transition: ${transition("color")};

    &:hover,
    &:focus {
      color: ${colors.sky[800]};
    }

    > strong {
      color: inherit;
    }
  }

  button,
  [data-button="true"] {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    padding: 0px;
    border: 1px solid transparent;
    border-radius: 5px;
    color: ${colors.slate[600]};
    background-color: transparent;
    font-weight: 900;
    font-size: 70%;
    text-transform: uppercase;
    cursor: pointer;

    transition: ${transition("color", "background-color")};

    &:hover {
      color: ${colors.sky[800]};
    }

    &:focus {
      outline: none;
      color: ${colors.sky[800]};
    }

    svg {
      fill: currentColor;
      transition: ${transition("transform")};
    }
  }

  button > svg,
  a > svg {
    min-width: 14px;
    min-height: 14px;
  }

  [data-button-group] {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ${createTextColorRules()}
`;
