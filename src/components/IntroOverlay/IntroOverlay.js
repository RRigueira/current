import React, { useEffect } from "react"
import { Wrapper } from "./IntroOverlay.styles"

import gsap from "gsap"

const tl = gsap.timeline()

const introAnim = () => {
  tl.to(".intro-overlay", 1.8, {
    height: 0,
    delay: 1.5,
    ease: "expo.inOut",
    stagger: 0.4,
  }).to(".intro-overlay", 0, {
    css: {
      display: "none",
    },
  })
}

const IntroOverlay = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    console.log("asd")
    introAnim()
  }, [])
  return (
    <Wrapper className="intro-overlay"></Wrapper>
  )
}

export default IntroOverlay
