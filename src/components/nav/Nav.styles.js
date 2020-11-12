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
  display: none;
  display: block;
  position: fixed;
  overflow: hidden;
  color: white;
  .back {
    border-radius: 50%;
    position: absolute;
    width: 150px;
    height: 150px;
    top: 25px;
    right: 50px;
    background: ${blue.default};
    transform: translateX(0) translateY(0);
  }
  .nav-columns {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      ${pseudo}
      left: 50%;
      top: 25%;
      width: 2px;
      height: 50%;
      background-color: ${black.default};
    }
  }
  .nav-column {
    width: 50%;
    height: 100%;
    padding: ${toRem(50)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    &:hover .nav-title {
      color: ${black.default};
    }
    .nav-title {
      ${h3}
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      color: ${white.default};
      position: relative;
      transition: 250ms;
    }
    .nav-more {
      ${p}
      color:#accce8  
    }
  }
`
