import React from 'react'
import { Image } from 'react-bootstrap';
import './About.css'

import myImage from './image/exmediaprofile.jpg'

function About() {
  return (
    <div className='about' id='about'>

      <div className='card'>

        <div className='image'>
          <Image href="#" src={myImage}></Image>
         
        </div>
        <div><h4 className=' text-light' style={{ color: 'rgb(3, 3, 65)',marginTop:'80px' }}>WHO ARE WE..?</h4></div>
        <div className='content'>
          <div className='aboutHead'>
            <h2 className='mb-5' >About Us</h2>
          </div>
          <div className='aboutPara'>
            <p style={{ textAlign: 'justify' }}>Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior
              Our studio is the birthplace of dynamic campaigns that captivate and resonate.Our agency stands as a pillar of excellence, providing a comprehensive suite of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate.
            </p>
          </div>
          <p className='text-danger mt-5'>EXMEDIA - STUDIO | GRAPHICS | BRANDING</p>



        </div>
      </div>








    </div>


  )
}

export default About