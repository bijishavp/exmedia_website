import React from 'react';
import Studio from './image/studio.jpg';
import Graphics from './image/graphics.jpg';
import Brand from './image/brand.jpg';
import Digital from './image/digital.jpg';
import './Services.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    title: 'STUDIO',
    img: Studio,
    heading: 'Elevate Your Impacts',
    description: 'Where Creativity Finds Its Canvas. Our Studio Is A Haven For Innovative Ideas, Bringing Visions To Life With Precision And Passion. With State-Of-The-Art Equipment And A Team Of Skilled Professionals, We Craft Captivating Visuals That Tell Compelling Stories. Step Into A World Of Boundless Possibilities And Let Your Brand\'s Story Unfold In Stunning Visual Brilliance.',
  },
  {
    title: 'GRAPHICS',
    img: Graphics,
    heading: 'Designs That Inspire',
    description: 'Introducing Exmedia Graphic Design, where imagination meets design prowess. Our Graphic studio is a playground for innovative ideas, transforming concepts into visually stunning realities. With a skilled team of designers, we craft graphics that captivate and communicate. From logos to intricate designs, our expertise spans a spectrum of visual elements.',
  },
  {
    title: 'BRANDING',
    img: Brand,
    heading: 'Your Brand Your Story',
    description: 'Welcome to Exmedia Branding, where identities come to life. Our expertise lies in shaping brands that resonate deeply and endure. With a keen understanding of market dynamics, we craft strategic brand identities that leave lasting imprints. From logos to comprehensive brand strategies, our team blends creativity with market insightsnthat stand out. We believe in the power of authentic storytelling and meaningful connections.',
  },
  
];

function Services() {
  return (
    <div className='services' id="service">
      <Container>
        <h3 className='text-center head'>WE OFFER</h3>
        <Row className="row justify-content-center">
          {servicesData.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center mb-4">
              <figure className="snip1567 text-center">
                <h4 className='mt-3'>{service.title}</h4>
                <img src={service.img} alt={service.title} />
                <figcaption>
                  <h3>{service.heading}</h3>
                  <p className='service-para'>{service.description}</p>
                </figcaption>
                <div className="hover"></div>
              </figure>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
