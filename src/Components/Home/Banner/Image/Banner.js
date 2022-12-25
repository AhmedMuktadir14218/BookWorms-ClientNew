import React from 'react'

const Banner = () => {
  return (
    <>
      <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-6 order-md-0 order-1">
            <div className="b_text">
              <h1>Find your desired books for the best price</h1>
              <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Libero, perferendis veritatis ea aliquid est repudiandae quisquam similique assumenda reprehenderit sequi, veniam, dignissimos dolorum minima, earum delectus vero. Rerum, voluptatem, quaerat?</p>

              <from action="" className="search_bar d-md-none d-lg-block">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control form-input" placeholder="Search Books..."/>
                <span className="left-pan"><i className="fa fa-microphone"></i></span>
              </from>


            </div>
          </div>
          <div className="col-xl-7 col-md-6 align-self-end order-md-1 order-0">
            <div className="b_img">
              <img src="images/banner.png" className="img-fluid" alt="bookworms"/>
            </div>
          </div>
        </div>
        <div className="row">
              <from action="" className="search_bar d-lg-none d-md-block d-none">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control form-input" placeholder="Search Books..."/>
                <span className="left-pan"><i className="fa fa-microphone"></i></span>
              </from>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner