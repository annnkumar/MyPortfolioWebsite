import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: #1a1a2e;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #16a085;
  }

  &.active {
    color: #16a085;
    border-bottom: 3px solid #16a085;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  span {
    color: #16a085;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #1a1a2e;
    z-index: 999;
  }
`;

const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">
        Ankit<span>Kumar</span>
      </Logo>
      <MobileIcon onClick={toggle}>
        {isOpen ? FaTimes({}) : FaBars({})}
      </MobileIcon>
      <NavMenu $isOpen={isOpen}>
        <NavItem>
          <NavLink to="#home" onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
          }}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#about" onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          }}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#skills" onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
          }}>
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#projects" onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}>
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#education" onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
          }}>
            Education
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#contact" onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact
          </NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;