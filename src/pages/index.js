import React, { useState } from 'react'
import Footer from '../component/footer'
import HeroSection from '../component/heroSection'
import InfoSection from '../component/infoSection'
import {
  // homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../component/infoSection/data'
import Navbar from '../component/navbar'
import Services from '../component/services'
import Sidebar from '../component/sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <InfoSection {...homeObjOne} /> */}
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home
