import styled from "@emotion/styled"
import { black, white } from "../../theme/colors"

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${black.default};
  .video {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    opacity: 0.5;
  }
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .row {
      width: 100%;
      h1,
      a {
        position: relative;
        z-index: 2;
        color: ${white.default};
      }
      h1 {
        z-index: 12;
      }
    }
  }
`
