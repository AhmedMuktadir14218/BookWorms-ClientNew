import React from 'react';
import { Link } from 'react-router-dom'
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <>

      <div className="page">
          <div className="container">
            <div className="row">
              <span><Link to="/"><i className="fa-solid fa-house"></i></Link> / Contact</span>
            </div>
          </div>
      </div>

      <section className="contact" id="contact">

        <div className="container">

          <div className="row">

            <div className="col-xl-4 col-md-5">
              <div className="form_text">
                <h6 className="tagline">CONTACT US</h6>
                <h2 className="h_section mb-4">Don’t Hesitate, Ask Any Query</h2>
              </div>

              <address className="contact-info">
                <span><i className="fa-solid fa-location-dot"></i>123 Main Street, 310 USA 12345</span>
                <a href="tel:"><i className="fa-solid fa-phone"></i>+00 - 0#00# - 00#</a>
                <a href="mailto:"><i className="fa-solid fa-envelope"></i>contact@bookworms.com</a>
              </address>
            </div>  

            <div className="col-xl-8 col-md-7">

              <div className='contact_box'>
                <form action="" className="mt-md-0 mt-5">

                  <div className="row g-3">
                    <div className="col-sm-6">
                      <input type="text" className="form-control c_form" id="" placeholder="First Name" required/>
                    </div>
                    <div className="col-sm-6">
                      <input type="text" className="form-control c_form" id="" placeholder="Last Name" required/>
                    </div>
                    <div className="col-sm-6">
                      <input type="text" className="form-control c_form" id="" placeholder="Phone"/>
                    </div>
                    <div className="col-sm-6">
                      <input type="email" className="form-control c_form" id="" placeholder="Email" required/>
                    </div>
                    <div className="col-sm-12">
                      <textarea className="form-control c_form c_form1 mb-3" placeholder="Your Message..." required></textarea>
                    </div>
                  </div>

                  

                  

                  <button type="submit" className="btn login_btn">Send Message</button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </section>
      

    </>
  )
}

export default Contact