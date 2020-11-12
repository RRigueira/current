import React, { useEffect } from "react"
import { Wrapper } from "./Nav.styles"
import { Link } from "gatsby"

import gsap from "gsap"

const tl = gsap.timeline()

const introAnim = () => {
  tl.to(".navContainer", 0.01, {
    css: {
      zIndex: "9",
    },
  })
    .to("#title", 0.01, {
      css: {
        zIndex: "5",
      },
    })
    .to(".back", 2, {
      css: {
        width: "250vw",
        height: "250vw",
        transform: "translateX(125vw) translateY(-125vw)",
      },
    })
    .to(".navc", 1, {
      opacity: 1,
    })
}

const closeAnim = () => {
  tl.to(".navc", 1, {
    opacity: 0,
  })
    .to(".back", 2, {
      css: {
        width: "150px",
        height: "150px",
        transform: "translateX(0) translateY(0)",
      },
    })
    .to(".navContainer", 0.01, {
      css: {
        zIndex: "0",
      },
    })
}

const Nav = ({ open, setState }) => {
  useEffect(() => {
    if (open) {
      introAnim()
    } else {
      closeAnim()
    }
  }, [open])

  return (
    <Wrapper className="navContainer">
      <div className="back"></div>
      <div className="nav-columns navc">
        <Link to="/service" className="nav-column">
          <span className="nav-title">What we do</span>
          <span className="nav-more">Learn More</span>
        </Link>

        <Link to="/service" className="nav-column">
          <span className="nav-title">Who we are</span>
          <span className="nav-more">Contact Us</span>
        </Link>
      </div>
    </Wrapper>
  )
}

export default Nav
