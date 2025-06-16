import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaMedal, FaTrophy, FaAward, FaUserTie, FaTimes } from 'react-icons/fa';

const EducationContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #1a1a2e;
  color: #fff;
`;

const EducationContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    
    @media screen and (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.isLeft ? 'flex-end' : 'flex-start'};
  padding-right: ${props => props.isLeft ? '50px' : '0'};
  padding-left: ${props => props.isLeft ? '0' : '50px'};
  margin-bottom: 3rem;
  width: 50%;
  position: relative;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 0;
    justify-content: flex-start;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 15px;
    right: ${props => props.isLeft ? '-8px' : 'auto'};
    left: ${props => props.isLeft ? 'auto' : '-8px'};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(to right, #16a085, #3498db);
    z-index: 1;
    
    @media screen and (max-width: 768px) {
      left: 16px;
      right: auto;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 350px;
  
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const TimelineIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    font-size: 1.8rem;
    margin-right: 0.8rem;
    color: #16a085;
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #fff;
  display: inline-block;
`;

const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: #16a085;
  margin-bottom: 1rem;
  display: block;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
`;

const TimelineSubtitle = styled.h4`
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem;
  color: #3498db;
`;

const CertificateModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const CertificateImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  border: 2px solid #16a085;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(22, 160, 133, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #16a085;
  }
`;

const DotButton = styled.button`
  position: absolute;
  top: 15px;
  right: ${props => props.isLeft ? '-8px' : 'auto'};
  left: ${props => props.isLeft ? 'auto' : '-8px'};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(to right, #16a085, #3498db);
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  
  @media screen and (max-width: 768px) {
    left: 16px;
    right: auto;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    opacity: ${props => props.hasCertificate ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
  
  &:hover:after {
    opacity: 1;
  }
`;

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const educationItems = [
    {
      id: 1,
      title: 'Kalinga Institute of Industrial Technology',
      subtitle: 'B.Tech. in Computer Science',
      date: 'Sep. 2022 – Jun 2026',
      description: 'Click on Dot for download certificate  8.45 CGPA',
      certificate: '/Certifications/p.png', 
      icon: <FaGraduationCap />,
      isLeft: true
    },
    {
      id: 2,
      title: 'Cloud Virtual Internship',
      subtitle: 'AICTE EduSkills Virtual Internship',
      date: 'Oct 2024 – Dec 2024',
      description: 'Curriculum by AWS Academy',
      certificate: '/Certifications/aws.jpg', 
      icon: <FaUserTie />,
      isLeft: false
    },
    {
      id: 3,
      title: 'Data Analytics',
      subtitle: 'Pwskills',
      date: 'May 2025',
      description: 'A data analytics course completed.',
      certificate: '/Certifications/pw.png', 
      icon: <FaMedal />,
      isLeft: true
    },
    {
      id: 4,
      title: 'Business Analyst Certification',
      subtitle: 'University of Colorado',
      date: 'Jan 2025',
      description: 'Coursera',
      certificate: '/Certifications/colordo.jpg', 
      icon: <FaMedal />,
      isLeft: true
    },
    {
      id: 4,
      title: 'Hackathon Achievement',
      subtitle: 'Third Place, GFG KIIT Chapter',
      date: 'Jan 2024',
      description: '',
      certificate: '/certificates/hackathon.jpg', 
      icon: <FaTrophy />,
      isLeft: false
    },
    {
      id: 5,
      title: '100 Days Badge of DSA Challenge',
      subtitle: 'Leetcode',
      date: 'Dec 2024',
      description: '',
      certificate: '/Certifications/leet.jpg', 
      icon: <FaAward />,
      isLeft: true
    }
  ];

  const handleDotClick = (certificate) => {
    if (certificate) {
      setSelectedCertificate(certificate);
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <EducationContainer id="education">
      <EducationContent>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education & Certifications
        </SectionTitle>
        
        <TimelineContainer>
          {educationItems.map((item, index) => (
            <TimelineItem
              key={item.id}
              initial={{ opacity: 0, x: item.isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              isLeft={item.isLeft}
            >
              <TimelineContent>
                <TimelineIcon>
                  {item.icon}
                  <div>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineDate>{item.date}</TimelineDate>
                  </div>
                </TimelineIcon>
                <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
              <DotButton 
                onClick={() => handleDotClick(item.certificate)}
                isLeft={item.isLeft}
                hasCertificate={!!item.certificate}
                aria-label={item.certificate ? 'View certificate' : 'No certificate available'}
              />
            </TimelineItem>
          ))}
        </TimelineContainer>
      </EducationContent>

      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <CloseButton onClick={closeModal} aria-label="Close certificate">
              <FaTimes />
            </CloseButton>
            <CertificateImage 
              src={selectedCertificate} 
              alt="Certificate" 
              onClick={(e) => e.stopPropagation()}
            />
          </CertificateModal>
        )}
      </AnimatePresence>
    </EducationContainer>
  );
};

export default Education;