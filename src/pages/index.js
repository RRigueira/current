import React from "react"
import { HomeContainer } from "@components/home/Home.styles"
import { Link } from "gatsby"
import IntroOverlay from "@components/IntroOverlay"

const Home = () => {
  return (
    <HomeContainer>
      <video
        autoPlay
        loop
        muted
        src="/video/home2.mp4"
        className="video"
      ></video>
      <div className="container">
        <div className="row">
          <h1 id="title">
            Creative minds, <br />
            thriving for success.
            <br />
            <strong>We are Current .</strong>
          </h1>
        </div>
        <div className="row">
          <Link to="/about" className="linkBubble">Learn More</Link>
        </div>
      </div>
      <IntroOverlay />
    </HomeContainer>
  )
}

export default Home
