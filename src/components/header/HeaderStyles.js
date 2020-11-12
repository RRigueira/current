import styled from "@emotion/styled"
import { blue } from "@theme/colors"
import { h3 } from "@theme/typography"
import { toRem } from "../../utils/mixins"
import { white } from "../../theme/colors"

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: ${toRem(200)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  z-index: 10;
  .logo {
    a {
      ${h3};
      color: ${white.default};
      text-transform: uppercase;
    }
  }
`

export const Toggle = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  .toggle-button {
    color: ${white.default};
    position: absolute;
    right: 0;
    top: 0;
    transition: 400ms;
    transform: translate(-5px, -50%);
    &--closed {
      opacity: 0;
      pointer-events: none;
      z-index: 0;
    }
  }
`
