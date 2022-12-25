import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Header/Search';
import Banner from './Banner/Image/Banner';
import Products from './Products/Products';
import Header from '../Header/Header';
import Offer from './Offer/Offer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>   
            <Banner/>            
            <section className='mb-0'><h2 className='h_section text-center'>Best Sellers</h2></section>
            <Products></Products>
            <Offer></Offer>

            
            <section className='mb-0'><h2 className='h_section text-center'>About Us</h2></section>

            <section className='about'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 align-self-center'>
                            <div className='about_img'>
                                <img src='images/about_img.jpg' className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-md-6 align-self-center'>
                            <div className='about_text'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>                                   
                                <Link className='shop_btn' to='/about'>View More</Link>   
                            </div>
                        </div>
                    </div>
                </div>

            </section>   
        </>
    );
};

export default Home;