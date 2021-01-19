import React, { useEffect } from "react"
import { NavColumn, Wrapper } from "./Nav.styles"
import { Link } from "gatsby"

import gsap from "gsap"

const tl = gsap.timeline()

const introAnim = () => {
  tl.to(".navContainer", {
    duration: 0.01,
    css: {
      zIndex: "9",
    },
  })
    .to("#title", {
      duration: 0.01,
      css: {
        zIndex: "5",
      },
    })
    .to(".nav-column", {
      duration: 0.4,
      css: {
        opacity: 1,
      },
    })
}

const closeAnim = () => {
  tl.to(".nav-column", {
    duration: 0.4,
    css: {
      opacity: 0,
    },
  }).to(".navContainer", {
    duration: 0.01,
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
      <ul>
        <NavColumn className="nav-column" color="red">
          <Link to="/about">
            <span className="nav-title">What we do</span>
            <span className="nav-more">Learn More</span>
          </Link>
        </NavColumn>
        <NavColumn className="nav-column" color="yellow">
          <Link to="/about">
            <span className="nav-title">What we've done</span>
            <span className="nav-more">Learn More</span>
          </Link>
        </NavColumn>
        <NavColumn className="nav-column" color="green">
          <Link to="/service">
            <span className="nav-title">Who we are</span>
            <span className="nav-more">Contact Us</span>
          </Link>
        </NavColumn>
      </ul>
    </Wrapper>
  )
}

export default Nav
