import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a1a2e;
  color: #fff;
  padding: 3rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  span {
    color: #16a085;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterLink = styled.a`
  color: #ddd;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #16a085;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #16a085;
    transform: translateY(-5px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  text-align: center;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, #16a085, #3498db);
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          Ankit<span>Kumar</span>
        </FooterLogo>
        
        <FooterLinks>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#education">Education</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
        
        <SocialLinks>
          <SocialIcon href="https://github.com/annnkumar" target="_blank" rel="noopener noreferrer">
            {FaGithub({})}
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/ankitkumar" target="_blank" rel="noopener noreferrer">
            {FaLinkedin({})}
          </SocialIcon>
          <SocialIcon href="mailto:initankit.cpp@gmail.com">
            {FaEnvelope({})}
          </SocialIcon>
          <SocialIcon href="https://leetcode.com/in/ankitkumar" target="_blank" rel="noopener noreferrer">
            {FaCode({})}
          </SocialIcon>
        </SocialLinks>
        
        <Copyright>&copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.</Copyright>
      </FooterContent>
      
      <ScrollToTop onClick={scrollToTop}>
        {FaArrowUp({})}
      </ScrollToTop>
    </FooterContainer>
  );
};

export default Footer;