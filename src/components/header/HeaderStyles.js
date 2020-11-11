import styled from "@emotion/styled"
import { blue } from "@theme/colors"
import { h3 } from "@theme/typography"
import { toRem } from "../../utils/mixins"
import { white } from "../../theme/colors"

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: ${toRem(150)};
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
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  .toggle-button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    color: ${white.default};
    &:hover {
      background-color: ${blue.default};
    }
    &--closed {
    }
  }
`
