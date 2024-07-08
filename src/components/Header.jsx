import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarColor('black'); // Change to black when scrolling down
      } else {
        setNavbarColor('transparent'); // Change back to transparent when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        style={{backgroundColor:'rgb(9, 2, 51)'}}
        
      >
        <Container>
          <Navbar.Brand href="#intro" className="brand-container">
            <img
              src='https://ex1.in/assets/images/logo/exlogo.png'
              width="50"
              height="70"
              className="d-inline-block align-top"
              alt="Brand logo"
            />
            <span className="nav-text" >Since 2006 !</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:'red'}} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Left-aligned navigation links (if needed) */}
            </Nav>
            <Nav>
              <Nav.Link href="#intro" className='links'>Home</Nav.Link>
              <Nav.Link href="#about" className='links'>About</Nav.Link>
              <Nav.Link href="#service" className='links'>Service</Nav.Link>
              <Nav.Link href="#contact" className='links'>Contact</Nav.Link>
              
              {/* Additional links can be added here */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
