import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #f9f9f9;
`;

const ContactContent = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1a1a2e;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  svg {
    font-size: 1.5rem;
    color: #16a085;
  }
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  color: #555;
  
  a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #16a085;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1a1a2e;
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #16a085;
    transform: translateY(-5px);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #555;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #16a085;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #16a085;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #16a085, #3498db);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  background: ${props => props.isSuccess ? 'rgba(22, 160, 133, 0.1)' : 'rgba(231, 76, 60, 0.1)'};
  color: ${props => props.isSuccess ? '#16a085' : '#e74c3c'};
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formMessage, setFormMessage] = useState({
    text: '',
    isSuccess: false,
    isVisible: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server
    // For this demo, we'll just show a success message
    setFormMessage({
      text: 'Thank you for your message! I will get back to you soon.',
      isSuccess: true,
      isVisible: true
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide message after 5 seconds
    setTimeout(() => {
      setFormMessage(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>
        
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            
            <ContactItem>
              {FaEnvelope({})}
              <ContactText>
                <a href="mailto:initankit.cpp@gmail.com">initankit.cpp@gmail.com</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              {FaPhone({})}
              <ContactText>
                <a href="tel:+919631727009">+91-9631727009</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              {FaGithub({})}
              <ContactText>
                <a href="https://github.com/annnkumar" target="_blank" rel="noopener noreferrer">
                  github.com/annnkumar
                </a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              {FaLinkedin({})}
              <ContactText>
                <a href="https://www.linkedin.com/in/ankitkumar2732?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/ankitkumar
                </a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              {FaCode({})}
              <ContactText>
                <a href="https://leetcode.com/u/ankit429359/" target="_blank" rel="noopener noreferrer">
                  leetcode.com/in/ankitkumar
                </a>
              </ContactText>
            </ContactItem>
            
            <SocialLinks>
              <SocialIcon 
                href="https://github.com/annnkumar" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {FaGithub({})}
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/ankitkumar2732?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {FaLinkedin({})}
              </SocialIcon>
              <SocialIcon 
                href="mailto:initankit.cpp@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {FaEnvelope({})}
              </SocialIcon>
              <SocialIcon 
                href="https://leetcode.com/u/ankit429359/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {FaCode({})}
              </SocialIcon>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <FormInput 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </SubmitButton>
            
            {formMessage.isVisible && (
              <FormMessage isSuccess={formMessage.isSuccess}>
                {formMessage.text}
              </FormMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;