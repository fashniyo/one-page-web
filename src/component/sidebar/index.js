import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  // SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
  // SidebtnWrap,
} from './sideBarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Github
          </SidebarLink>
          <SidebarLink to="sevices" onClick={toggle}>
            Details
          </SidebarLink>
          <SidebarLink to="sevices" onClick={toggle}>
            LinkedIn
          </SidebarLink>
        </SidebarMenu>
        {/* <SidebtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
