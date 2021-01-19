import styled from "@emotion/styled"
import { blue, white, black, grey } from "../../theme/colors"
import { p } from "~theme/typography"
import { h3 } from "../../theme/typography"
import { pseudo, toRem } from "../../utils/mixins"

export const Wrapper = styled.nav`
  left: 0;
  top: -1px;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  position: fixed;
  overflow: hidden;
  color: white;
  background-color: #262626;
  ul {
    display: flex;
    width: 100%;
    height: 50%;
  }
`

export const NavColumn = styled.li`
  height: 100%;
  flex: 1;
  padding: ${toRem(50)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 0;

  &:hover .nav-title {
    opacity: 1;
  }

  &:hover .nav-more {
    opacity: 1;
    /* color: ${props => props.color}; */
    color: ${blue.default};
  }
  a {
    .nav-title {
      ${h3}
      display: block;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      color: ${white.default};
      opacity: 0.7;
      position: relative;
      transition: 250ms;
    }
    .nav-more {
      display: block;
      ${p}
      color: ${white.default};
      opacity: 0.7;
      transition: 250ms;
    }
  }
`
