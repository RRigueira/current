import React from "react"
import { Global } from "@emotion/core"
import { globalStyles } from "~theme/global"
import Border from "@components/common/Border"
import Header from "@components/header"

const Layout = ({ location, ...props }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <main>{props.children}</main>
      <Border />
    </>
  )
}

export default Layout
