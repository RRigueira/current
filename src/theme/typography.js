import { css } from "@emotion/core"
import { toRem, breakpoints } from "~utils/mixins"

export const fontImport = css`
  @import url("https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Poppins:200,400&display=swap");
`

export const h1 = css`
  font-family: "Poppins", sans-serif;
  font-size: ${toRem(50)};
  font-weight: 300;
  margin: 0;
  margin-bottom: ${toRem(20)};
  line-height: normal;
  @media (orientation: portrait) {
    font-size: ${toRem(45)};
  }
  @media (max-width: 599px) {
    font-size: ${toRem(40)};
  }
`

export const h2 = css`
  font-family: "Poppins", sans-serif;
  font-size: ${toRem(40)};
  font-weight: 900;
  @media ${breakpoints.bigDesktop} {
    font-size: ${toRem(40)};
  }
  @media (orientation: portrait) {
    font-size: ${toRem(50)};
  }
  @media (max-width: 599px) {
    font-size: ${toRem(40)};
  }
`

export const h3 = css`
  font-family: "Poppins", sans-serif;
  font-size: ${toRem(30)};
  font-weight: 700;
  line-height: normal;
  @media (orientation: portrait) {
    font-size: ${toRem(28)};
  }
  @media (max-width: 599px) {
    font-size: ${toRem(24)};
  }
`

export const h4 = css`
  font-family: "Poppins", sans-serif;
  font-size: ${toRem(18)};
  font-weight: 900;
  line-height: ${toRem(24)};
  @media (orientation: portrait) {
    font-size: ${toRem(14)};
    line-height: ${toRem(21)};
  }
  @media (max-width: 599px) {
    font-size: ${toRem(12)};
    line-height: ${toRem(17)};
  }
`

export const p = css`
  font-size: ${toRem(16)};
  line-height: ${toRem(20)};
  letter-spacing: -0.5px;
  @media (orientation: portrait) {
    font-size: ${toRem(16)};
    line-height: ${toRem(24)};
  }
  @media (max-width: 599px) {
    font-size: ${toRem(16)};
    line-height: ${toRem(24)};
  }
`
