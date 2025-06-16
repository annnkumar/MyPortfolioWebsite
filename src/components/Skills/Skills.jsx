import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaCode, FaDatabase, FaTools, FaLaptopCode, 
  FaBrain, FaServer, FaDesktop, FaGithub, 
  FaComments, FaPuzzlePiece, FaRandom, FaLanguage 
} from 'react-icons/fa';

const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #1a1a2e;
  color: #fff;
`;

const SkillsContent = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  color: #16a085;
  
  svg {
    margin-right: 0.8rem;
    font-size: 1.8rem;
  }
`;

const SkillsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '▹';
    color: #16a085;
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(to right, #16a085, #3498db);
  border-radius: 4px;
  width: ${props => props.width};
`;

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </SectionTitle>
        
        <SkillsGrid>
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              {FaCode({})}
              Programming Languages
            </CategoryTitle>
            <SkillsList variants={container} initial="hidden" animate="show">
              <SkillItem variants={item}>C++</SkillItem>
              <SkillItem variants={item}>C</SkillItem>
              <SkillItem variants={item}>Java</SkillItem>
              <SkillItem variants={item}>Python</SkillItem>
              <SkillItem variants={item}>SQL</SkillItem>
              <SkillItem variants={item}>HTML, CSS, JavaScript</SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              {FaTools({})}
              Tools & Platforms
            </CategoryTitle>
            <SkillsList>
              <SkillItem variants={item}>AWS Foundation</SkillItem>
              <SkillItem variants={item}>MySQL</SkillItem>
              <SkillItem variants={item}>Power BI</SkillItem>
              <SkillItem variants={item}>MS Excel</SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              {FaLaptopCode({})}
              Libraries & Frameworks
            </CategoryTitle>
            <SkillsList>
              <SkillItem variants={item}>NumPy</SkillItem>
              <SkillItem variants={item}>Pandas</SkillItem>
              <SkillItem variants={item}>Matplotlib</SkillItem>
              <SkillItem variants={item}>Seaborn</SkillItem>
              <SkillItem variants={item}>Scikit-learn</SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              {FaBrain({})}
              Machine Learning & AI
            </CategoryTitle>
            <SkillsList>
              <SkillItem variants={item}>EDA</SkillItem>
              <SkillItem variants={item}>Supervised & Unsupervised Learning</SkillItem>
              <SkillItem variants={item}>Ensemble Methods</SkillItem>
              <SkillItem variants={item}>Clustering</SkillItem>
              <SkillItem variants={item}>Time Series Forecasting</SkillItem>
              <SkillItem variants={item}>Model Evaluation & Optimization</SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              {FaDesktop({})}
              Development Environments
            </CategoryTitle>
            <SkillsList>
              <SkillItem variants={item}>VS Code</SkillItem>
              <SkillItem variants={item}>Jupyter Notebook</SkillItem>
              <SkillItem variants={item}>Git</SkillItem>
              <SkillItem variants={item}>GitHub</SkillItem>
              <SkillItem variants={item}>Cursor IDE</SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              {FaComments({})}
              Soft Skills
            </CategoryTitle>
            <SkillsList>
              <SkillItem variants={item}>Communication</SkillItem>
              <SkillItem variants={item}>Problem-Solving</SkillItem>
              <SkillItem variants={item}>Adaptability</SkillItem>
              <SkillItem variants={item}>Team Collaboration</SkillItem>
              <SkillItem variants={item}>Time Management</SkillItem>
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;