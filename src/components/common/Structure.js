import styled from "@emotion/styled"
import { toRem } from "../../utils/mixins"
import { blue, white } from "../../theme/colors"

export const DefaultContainer = styled.div`
  z-index: 2;
  height: 100vh;
  padding-top: 250px;
  overflow-y: scroll;
  section {
    display: flex;
    height: 100vh;
    .column {
      padding: 20px;
      width: 50%;
      height: 100%;
      &.fixed {
        position: -webkit-sticky; /* Required for Safari */
        display: flex;
        flex-direction: column;
        position: sticky;
        width: 55%;
        top: 0px;
        padding-bottom: 177px;
        height: fit-content;
      }
      &.circle-box-container {
        padding: 120px 0 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .row {
          padding: 0 80px;
          margin-left: 40px;
        }
      }
    }
  }
`
