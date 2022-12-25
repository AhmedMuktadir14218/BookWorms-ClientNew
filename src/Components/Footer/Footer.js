import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="f_top">
          <div className="row">

            <div className="col-xl-4 col-lg-3 col-md-8 col-sm-8 text-sm-start text-center">
              <div className="ft_single">

                <div className="logo logo2">                  
                  <img src="images/logo.png" className="img-fluid" alt="bookworms"/>
                </div>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quia! Amet porro deleniti, numquam culpa laboriosam. Commodi, laudantium exercitationem at.</p>


                               
              </div>
            </div>


            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 text-sm-start text-center">
              <div className="ft_single">                
                <h4>Products</h4>
                <ul className="list-unstyled">
                  <li><a href="#">brands</a></li>
                  <li><a href="#">Authors</a></li>
                  <li><a href="#">Reviews</a></li>
                </ul>                
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm text-sm-start text-center">
              <div className="ft_single">                
                <h4>Support</h4>
                <ul className="list-unstyled">
                  <li><a href="#">Guide</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">help desk</a></li>
                </ul>                
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm text-sm-start text-center">
              <div className="ft_single">                
                <h4>Policies</h4>
                <ul className="list-unstyled">
                  <li><a href="t&c.html">Terms and Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                </ul>                
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 text-sm-start text-center">
              <div className="ft_single s_contact">                
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="mailto:">contact@bookworms.com</a></li>
                  <li><a href="#">#2A, Road 6, Someplace, Dhaka 1207, Bangladesh</a></li>
                </ul>                
              </div>
            </div>

            

          </div>
        </div>

        <div className="container text-center">
          <p className="copyright text-center">Copyright © 2022 |<NavLink to="/">BookWorms</NavLink>| All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer