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
        width: "100px",
        height: "100px",
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
      <div className="container navc">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link to="/about">Quem somos</Link>
              </li>
              <li>
                <Link to="/service">O que fazemos</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfólio</Link>
              </li>
            </ul>
          </div>

          <div className="nav-column">
            <div className="nav-label">Contactos</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <a href="mailto:geral@mantracs.com">geral@mantracs.com</a>
                </li>
                <li>
                  <Link to="/contact">Entra em contacto</Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Sede</li>
                <li>
                  <p>R. de Dom João IV 6-8</p>
                </li>
                <li>
                  <p>4595-577 Paços de Ferreira</p>
                </li>
                <li>
                  <p>Portugal</p>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Telemóvel</li>
                <li>
                  <a href="/">(+351) 919 587 563</a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>
                  <a href="/">Privacidade e Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Nav
