import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"
import { HashLoader } from 'react-spinners';

const Products = () => {



    const [products,setProducts]=useState([]);
    useEffect(()=>{
        // fetch('http://localhost:5000/product')
        fetch('https://bookworms-server.up.railway.app/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

   const [loading,setLoading]=useState(false)
   useEffect(() => {
     setLoading(true)
     setTimeout(()=>{
      setLoading(false)
     },1000)
   }, [])
   
    return (
      <section className='mt-1 mb-5'>
        <div className='carditem container'>         

          <div>
              <>
              {
                loading?
                <div className='Spinner'>
                  <HashLoader  color={'#523e27'} loading={loading}  size={80} aria-label="Loading Spinner" />
                </div>
                :
                <div className='products-container '>
                {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                      }
                  
                  </div>
              }
              </>
          </div>
        
        </div>
      </section>
       
    );
};

export default Products;