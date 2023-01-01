import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBTNWraper,
  ArrowForward,
  ArrowRight,
} from './heroElements'
import { Button } from '../buttonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroH1>Olaniyi Fashola</HeroH1>
        <HeroP>
          Sign Up for new account and recceive 2000 dolksn payment towards your
          nex payment
        </HeroP>
        <HeroP>Citation</HeroP>
        <HeroBTNWraper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started/Github {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBTNWraper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
