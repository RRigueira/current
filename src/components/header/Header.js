import React, { useEffect } from "react"
import { Wrapper, Toggle } from "./HeaderStyles"
import { useState } from "react"
import { Link } from "gatsby"

import gsap from "gsap/gsap-core"
import Arrow from "@components/icons/arrow"
import { white, blue } from "@theme/colors"
import Nav from "@components/nav"

let tl = gsap.timeline()

const Header = ({ dimensions, location }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false })
  const [page, setPage] = useState(location)

  useEffect(() => {}, [location])
  return (
    <>
      <Wrapper>
        <div className="logo">
          <Link to="/">Current</Link>
        </div>
        <Toggle>
          <button
            className={
              menuState.menuOpened
                ? "linkBubble linkBubble--grey toggle-button"
                : "linkBubble linkBubble--grey toggle-button toggle-button--closed"
            }
            onClick={() => setMenuState({ menuOpened: false })}
          >
            Close
          </button>

          <button
            className={
              !menuState.menuOpened
                ? "linkBubble toggle-button"
                : "linkBubble toggle-button toggle-button--closed"
            }
            onClick={() => setMenuState({ menuOpened: true })}
          >
            Menu
          </button>
        </Toggle>
      </Wrapper>
      <Nav open={menuState.menuOpened} setState={() => setMenuState()} />
    </>
  )
}

export default Header
