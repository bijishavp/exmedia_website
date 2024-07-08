import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Intro.css';
import { Button } from 'react-bootstrap';
import { MessageCircle } from 'react-feather'; // Importing the MessageCircle icon from Feather

function Intro() {
  return (
    <div className="intro" id='intro'>
      <div className="intro-content">
        <h1 className="first left-align">CRAFTING <span className="brand-text" style={{fontSize:'40px'}}>BRAND</span> IDENTITY CAPTURING MOMENTS</h1>
        <br />
        <h2 className="second">Think Before Your Ad <span></span></h2>
        
        <Button variant='danger' className='btn-read-more' style={{marginTop:'20px',width:'50%'}} onClick={() => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}}>Read More</Button>
      </div>
      {/* WhatsApp Icon as a Button */}
      <a className="whatsapp-link" href="https://api.whatsapp.com/send?phone=919526123466&text=Hello,%20I%20have%20a%20question%20about%20https%3A%2F%2Fwww.exmedia.in%2F" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="whatsapp-icon" />
      </a>
    </div>
  );
}

export default Intro;
