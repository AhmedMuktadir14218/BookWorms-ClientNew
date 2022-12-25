import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom'
import "../About/About.css";


const About = () => {
    return (
        <>
            <div className="page">
                <div className="container">
                    <div className="row">
                    <span><Link to="/"><i className="fa-solid fa-house"></i></Link> / About Us</span>
                    </div>
                </div>
            </div>
            <section className='about mt-lg-5 mt-3'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 align-self-center'>
                            <div className='about_img'>
                                <img src='images/about_img2.jpg' className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-md-6 align-self-center'>
                            <div className='about_text'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> 
                            </div>
                        </div>
                    </div>

                    <div className='row mt-100'>
                        <div className='col-md-6 align-self-center'>
                            <div className='about_text'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                            
                            </div>
                            
                        </div>
                        <div className='col-md-6 align-self-center'>
                            <div className='about_img'>
                                <img src='images/about_img.jpg' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>    
        </>
        
        
    );
};

export default About;