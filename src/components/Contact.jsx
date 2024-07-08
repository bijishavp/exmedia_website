import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Link } from 'react-feather';
import { Mail, Phone, MapPin } from 'react-feather';
import './Contact.css'
function Contact() {
  return (
    <div className='contact-section' id='contact'>
      {/* Footer section with background color and padding */}
      <section className="text-danger pt-2 pb-2" style={{ backgroundColor: 'rgb(9,5,21)' }}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">





            <div className="d-flex flex-column align-items-center col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p className="h6 text-uppercase text-secondary fw-bold mb-4">Connect with us</p>
              <p>
                <a href="https://www.facebook.com/exmedia" className="text-reset" >
                  <Facebook /> Facebook
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/exmedia_1/" className="text-reset">
                  <Instagram /> Instagram
                </a>
              </p>

              <p>
                <a href="https://www.youtube.com/@exmedia-" className="text-reset">
                  <Youtube /> YouTube
                </a>
              </p>
              <p>
                <a href="https://x.com/exmedia_1" className="text-reset">
                  <Twitter /> Twitter
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/exmedia1/" className="text-reset">
                  <Linkedin /> LinkedIn
                </a>
              </p>
              <p>
                <a href="https://www.exmedia.in/www.pinterest.com/exmedia" className="text-reset">
                  <Link /> Pinterest
                </a>
              </p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p className="h6  text-secondary text-uppercase fw-bold mb-4">
                Contact Us
              </p>
              <p>
                <Mail size={16} style={{ marginRight: '8px' }} />
                <a href="mailto:info@example.com" className="text-reset">info@exmedia.in</a>
              </p>
              <p>
                <Phone size={16} style={{ marginRight: '8px' }} />
                <a href="tel:+1234567890" className="text-reset">+919526123466
                </a>
              </p>
              <p>
                <MapPin size={16} style={{ marginRight: '8px' }} />
                KERALA & UAE
              </p>
            </div>
          </div>
        </div>


        {/* Footer bottom text */}
        <p className="text-center">
          All Rights Reserved &copy; EXMEDIA &reg; 2024
        </p>
      </section>
    </div>

  )
}

export default Contact