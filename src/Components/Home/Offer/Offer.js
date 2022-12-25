import React from 'react'
import { NavLink } from 'react-router-dom';

const Offer = () => {
  return (
    <>
    <section className="offer mt-3">
      <div className="container">
        <div className="row justfy-content-center align-items-center">
          <div className="col-md-6 col-sm-7 align-self-center">
            <div className="offer_text text-center">
              <h1>40% OFF</h1>
              <h3>Flat Discount on All Books</h3>
              <p>Terms & Condition Apply*</p>
              <NavLink to="/shop" className="shop_btn">Shop Now</NavLink>
            </div>
          </div>          
          <div className="col-md-6 col-sm-5 align-self-center text-center">
            <div className="offer_img">
              <img src="images/banner2.png" className="img-fluid w-" alt="bookworms"/>
            </div>
          </div>          
        </div>
      </div>
    </section>
    </>
  )
}

export default Offer