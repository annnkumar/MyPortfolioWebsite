import VantaBackground from './VantaBackground';
import { FaFilePdf } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa';

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(to right, #16a085, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #f5f5f5;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #ddd;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: #fff;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: #16a085;
    transform: translateY(-5px);
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(to right, #16a085, #3498db);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <VantaBackground effectType="globe" />
      <Content>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Ankit Kumar
          </Title>
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Developer & AI Enthusiast
          </Subtitle>
          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about Software Development, AI and problem-solving, with a focus on building innovative solutions.
          </Description>
        </motion.div>

        <SocialLinks
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <SocialIcon href="https://github.com/annnkumar" target="_blank" rel="noopener noreferrer">
            {FaGithub({})}
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/ankitkumar" target="_blank" rel="noopener noreferrer">
            {FaLinkedin({})}
          </SocialIcon>
          <SocialIcon href="mailto:initankit.cpp@gmail.com">
            {FaEnvelope({})}
          </SocialIcon>
          <SocialIcon href="tel:+919876543210">
            {FaPhone({})}
          </SocialIcon>
          <SocialIcon 
             href="/resume.pdf" 
             download="resume.pdf"
             target="_blank" 
             rel="noopener noreferrer"
>
  {FaFilePdf({})}
</SocialIcon>
        </SocialLinks>

        <CTAButton
          href="#projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </CTAButton>
      </Content>
    </HomeContainer>
  );
};

export default Home;