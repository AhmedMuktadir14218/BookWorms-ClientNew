import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://bookworms-server.up.railway.app/product')
        // fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return [products,setProducts]
};

export default useProducts;