import styled from "@emotion/styled"
import { blue, white } from "../../theme/colors"
import { p } from "~theme/typography"
import { h3 } from "../../theme/typography"

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
    width: 100px;
    height: 100px;
    top: 25px;
    right: 100px;
    background: ${blue.default};
    transform: translateX(0) translateY(0);
  }
  .container {
    height: auto;
  }
  a {
    color: white;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: ${white.default};
      transition: 0.4s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
        background: ${white.default};
      }
    }
  }
  .nav-columns {
    width: 100%;
    transform: translateY(125px);
    display: flex;
    padding: 0 32px;
    .nav-column {
      width: 45%;
      &:last-child {
        width: 55%;
      }
      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;
      }
      .nav-links {
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          margin-bottom: 2.8rem;
          a {
            ${h3}
            color: white;
            text-transform: uppercase;
            text-decoration: none;
            color: ${white.default};
          }
        }
      }
      .nav-infos {
        display: flex;
        flex-wrap: wrap;
        .nav-info {
          padding: 0;
          width: 50%;
          &:nth-of-type(2),
          &:nth-of-type(3) {
          }
          .nav-info-label {
            font-weight: 600;
            margin-bottom: 1.4rem;
          }
          li {
            list-style: none;
            p {
              color: ${white.default};
            }
            a {
              ${p}
              text-decoration: none;
              color: ${white.default};
            }
          }
        }
      }
    }
  }
`
