import React from "react"
import styled from "@emotion/styled"
import { blue } from "../../../theme/colors"

export const Button = styled.button`
  padding: 20px;
  background: ${props => (props.blue ? "white" : blue.default)};
  z-index: 50;
  color: ${props => (!props.blue ? "white" : blue.default)};
`
