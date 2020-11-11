import { css } from "@emotion/core"
import normalize from "emotion-normalize"

import * as typography from "~theme/typography"
import * as colors from "~theme/colors"
import { toRem } from "~utils/mixins"
import { container } from "./sizes"
import { p, h1, h2, fontImport } from "./typography"
import { blue, black } from "./colors"

export const globalStyles = css`
  ${normalize}

  ${fontImport}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
    font-family: "Space Mono", monospace;
    font-size: ${toRem(16)};
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    color: black;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    width: 100%;
    max-width: ${container.default}px;
    margin: 0 auto;
    position: relative;
    &--small {
      max-width: ${container.small}px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 400;
  }

  h1 {
    ${h1}
  }

  h2 {
    ${h2}
    color: black;
    text-align: center;
    text-transform: uppercase;
    margin: ${toRem(12)};
    transition: 250ms;
  }

  p {
    ${p}
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 250ms;
  }

  button {
    appearance: none;
    display: inline-block;
    border-radius: 0;
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }

  address {
    font-style: normal;
  }

  .show {
    display: block;
  }

  .hidden {
    display: none;
  }

  .left,
  .right,
  .top,
  .bottom {
    background: ${black.default};
    z-index: 900;
    position: fixed;
  }

  .left,
  .right {
    top: 0;
    bottom: 0;
    width: 7px;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
  .top,
  .bottom {
    left: 0;
    width: 100%;
    height: 7px;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
`
