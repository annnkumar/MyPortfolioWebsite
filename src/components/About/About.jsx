import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaLaptopCode, FaLanguage } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #f9f9f9;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a2e;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #16a085, #3498db);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  background: linear-gradient(135deg, #16a085, #3498db);
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const AboutInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: #16a085;
  }
  
  span {
    font-size: 1.1rem;
    color: #333;
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>
        
        <AboutGrid>
        <AboutImage
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
>
  <img 
    src="/images/profile.jpg" 
    alt="Your Name" 
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover' 
    }} 
  />
</AboutImage>
          
          <AboutInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AboutText>
              I am a passionate Computer Science student with a strong interest in Software Development, AI, and problem-solving. 
              My goal is to build innovative solutions that make a positive impact. I enjoy tackling complex problems and 
              continuously learning new technologies to enhance my skills.
            </AboutText>
            
            <InfoItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {FaGraduationCap({})}
              <span>B.Tech. in Computer Science at Kalinga Institute of Industrial Technology</span>
            </InfoItem>
            
            <InfoItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {FaLaptopCode({})}
              <span>Focused on Machine Learning, AI, and Software Development</span>
            </InfoItem>
            
            <InfoItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {FaLanguage({})}
              <span>Fluent in Hindi and English</span>
            </InfoItem>
          </AboutInfo>
        </AboutGrid>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;