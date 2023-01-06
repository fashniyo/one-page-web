import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesWrapper,
  ServicesIcon,
  // ServicesP,
} from './servicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Details</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
          href="https://drive.google.com/file/d/1n3sevSWSPvFuknOABl7FUiIr20sOB7ak/view?usp=sharing"
          target="_blank"
          aria-label="Resume"
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Resume</ServicesH2>
          {/* <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard
          href="#"
          // target="_blank"
          aria-label="Resume"
        >
          <ServicesIcon src={Icon2} />
          <ServicesH2>Citation</ServicesH2>
          {/* <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard
          href="https://fashniyo.disha.page/"
          target="_blank"
          aria-label="Graphic"
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>Graphics Design Portfolio</ServicesH2>
          {/* <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
