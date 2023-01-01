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
  ServicesP,
} from './servicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Details/Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Resume/Reduce Expenses</ServicesH2>
          {/* <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Citation/Reduce Expenses</ServicesH2>
          {/* <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Grapics/Reduce Expenses</ServicesH2>
          {/* <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
