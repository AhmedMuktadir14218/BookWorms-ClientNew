import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, name, img, description, price} = product;
    const  navigate=useNavigate();
    const navigateToProduct = id =>{
        navigate(`/product/${_id}`);
    }
    return (

        <>
        <div className="b_single product b_single2 text-center" onClick={()=>navigateToProduct(product._id)}>

            <div className="b_single_item">
            <img src={product.img} className="img-fluid" alt="bookworms"/>

            <div className="b_overlay">
                <ul className="list-inline text-center">
                    <li className="list-inline-item">
                        <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>                
                </ul>
            </div>

            <div className="overlay_bg"></div>
            </div>

            <div className="price text-start">
            <h3>{product.name}</h3>
            <p>{product.price} ৳</p>
            </div>
        </div>
        </>
        
        
        
    );
};

export default Product;

