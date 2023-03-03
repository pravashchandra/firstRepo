import React from 'react'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrappers,FooterLinkItem,FooterLinkTitle,FooterLink } from './FooterElement'
import { FooterContainers, FooterWraps, FooterLinksWrapper,SocialMedia,SocialMediaWrap,SocialLogo, FooterLinkItems,SocialIconLinks,WebsiteRights, SocialIcons} from './FooterElement'
import { FaFacebook,FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainers>
      <FooterWraps>
        <FooterLinksContainer>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Careers</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/signin">Contact</FooterLink>
                    <FooterLink to="/signin">Support</FooterLink>
                    <FooterLink to="/signin">Destinations</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
            
            </FooterLinksWrapper>

            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/signin">Submit Videos</FooterLink>
                    <FooterLink to="/signin">Ambassadors</FooterLink>
                    <FooterLink to="/signin">Agency</FooterLink>
                    <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Youtube</FooterLink>
                    <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              dollo
            </SocialLogo>
            <WebsiteRights>dollo  &copy;{new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLinks href='//www.facebook.com' target="_blank" aria-label="Facebook"> <FaFacebook /> </SocialIconLinks>
              <SocialIconLinks href='//www.instagram.com' target="_blank" aria-label="Instagram"> <FaInstagram /> </SocialIconLinks>
              <SocialIconLinks href='//www.youtube.com' target="_blank" aria-label="Youtube"> <FaYoutube /> </SocialIconLinks>
              <SocialIconLinks href='//www.twitter.com' target="_blank" aria-label="Twitter"> <FaTwitter /> </SocialIconLinks>
              <SocialIconLinks href='//www.linkedin.com' target="_blank" aria-label="Linkedin"> <FaLinkedin /> </SocialIconLinks>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWraps>
    </FooterContainers>
  )
}

export default Footer
