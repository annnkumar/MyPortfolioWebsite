import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaServer, FaChartLine } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #f9f9f9;
`;

const ProjectsContent = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImageContainer = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #16a085, #3498db);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a2e;
`;

const ProjectDate = styled.span`
  font-size: 0.9rem;
  color: #16a085;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(22, 160, 133, 0.1);
  color: #16a085;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #16a085;
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Vidhyarthi Classes Website',
      description: 'A responsive website for Vidhyarthi Classes with modern UI and smooth animations.',
      technologies: ['React', 'HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/annnkumar/rajeevClasses',
      demo: 'https://vidhyarthistudycenter.netlify.app/',
      image: '/images/image1.png',
      icon: <FaChartLine />
    },
    {
      id: 2,
      title: 'Currency Converter',
      description: 'A currency converter application that allows users to convert currencies in real-time.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API-Integration'],
      github: 'https://github.com/annnkumar/currency-converter',
      image: '/images/image2.png',
      icon: <FaDatabase />
    },  
    {
      id: 3,
      title: 'UPI FRAUD DETECTION',
      description: 'A machine learning model that detects fraud in UPI transactions.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/annnkumar/UPI_FRAUD_DETECTION',
      demo: '',
      image: '/images/image3.png',
      icon: <FaServer />
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills with a modern UI.',
      technologies: ['React', 'Styled Components', 'Framer Motion', 'React Icons'],
      github: 'https://github.com/annnkumar/portfolio',
      demo: 'https://ankitportfoliowebsite2.netlify.app/',
      image: '/images/image4.png',
      icon: <FaCode />
    },
    {
      id: 5,
      title: 'Forest Fire Prediction',
      description: 'A Machine Learning Project predict chances of forest fire by giving input value.',
      technologies: ['Python' , 'ML' , 'Flask'],
      github: 'https://github.com/annnkumar/fire-weather-index-calculator',
      demo: '',
      image: '/images/image5.png',
      icon: <FaCode />
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'A simple web which gives the current tempreture.',
      technologies: ['Html' , 'Css' , 'js' , 'Api-Integration'],
      github: 'https://github.com/annnkumar/Weather-App',
      demo: 'https://weather-app-lilac-nine-50.vercel.app/',
      image: '/images/image5.png',
      icon: <FaCode />
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImageContainer>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                ) : (
                  project.icon
                )}
              </ProjectImageContainer>
              
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{project.date}</ProjectDate>
                
                <TechStack>
                  {project.technologies.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
                
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    {FaGithub({})} GitHub
                  </ProjectLink>
                  {project.demo && (
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      {FaExternalLinkAlt({})} Live Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;