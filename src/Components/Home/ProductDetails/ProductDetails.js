import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import "../ProductDetails/pd.css";



const ProductDetails = () => {
    const {productId}=useParams();
    const [product,setProduct]=useState({});

    useEffect(() => {
      
        const url = `https://bookworms-server.up.railway.app/product/${productId}`;
        

        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));
    }, [])
    
    return (
        <>  
            {/* <Header></Header>           */}
            <section className='productdeatails mt-0'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='p_img'>                             
                                <img src={product.img} className="img-fluid" alt="bookworms"/>
                            </div>                            
                        </div>
                        <div className='offset-1 col-lg-7'>
                            <div className='p_text'>
                                <h1>{product.name}</h1>
                                <h2>{product.price} ৳</h2>
                                <h3 className='pt-3'>Description</h3>                                
                                <h5>{product.description}</h5>

                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='pt-3'><span>Writer: </span>{product.writer}</p>
                                        <p><span>Language: </span>{product.language}</p>
                                        <p><span>Catagory: </span>{product.catagory}</p>
                                    </div>
                                    <div className='col-6'>
                                    <p className='pt-3'><span>Publisher: </span>{product.publisher}</p>
                                    <p><span>Stock Available: </span>{product.stock}</p>
                                    </div>
                                </div>
                                
                                

                                <Link to='/checkout' className='btn p-0'>
                                    <button type="submit" className='btn login_btn m-0'>Proceed Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    );
};

export default ProductDetails;