import React from 'react'
import {
  // FaFacebook,
  FaInstagram,
  FaLinkedin,
  // FaHiMail,
  FaTwitter,
  // FaYoutube,
} from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { animateScroll as scroll } from 'react-scroll'
import {
  FooterCOntainer,
  FooterWrap,
  // FooterLink,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLinksContainer,
  // FooterLinkWrapper,
  SocialMedia,
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRight,
} from './footerElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterCOntainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Ola👀😎
            </SocialLogo>
            <WebsiteRight>
              fashniyo © {new Date().getFullYear()} All rights reserved
            </WebsiteRight>
            <SocialIcon>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink> */}
              <SocialIconLink
                href="https://www.instagram.com/fashniyo/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink
                href="https://twitter.com/fashniyo"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/olaniyi-fashola-6b5790181/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="mailto: olaniyifashola14@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <HiMail />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterCOntainer>
  )
}

export default Footer
