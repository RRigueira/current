import React, { useEffect, useState } from "react"
import { CursorContainer } from "./Cursor.styles"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }
  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const handleLinkHoverEvents = () => {
    document.querySelectorAll(".linkBubble").forEach(el => {
      console.log(el)
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  const cursorClasses = `${clicked ? "cursor--clicked" : null} ${
    hidden ? "cursor--hidden" : null
  } ${linkHovered ? "cursor--link-hovered" : null} `

  return (
    <CursorContainer
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default Cursor
