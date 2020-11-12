import styled from "@emotion/styled"
import { breakpoints } from "../../utils/mixins"
import { blue, white } from "../../theme/colors"

export const CursorContainer = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${white.default};
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;
  &.cursor--hidden {
    opacity: 0;
  }
  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(1.3);
  }
  &.cursor--link-hovered {
    opacity: 0;
  }
`
