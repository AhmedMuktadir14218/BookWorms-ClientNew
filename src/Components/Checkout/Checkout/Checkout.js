import React from 'react';
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            <section>
            <div className='container text-center'>

            <h2 className='h_section mb-1'>Thanks For Being With US :)</h2>
            <p className='mb-5'>Please check your mail for confirmation !!</p>
            <Link className='shop_btn' to='/'>Go Back to Home</Link>


            </div>
            </section>
        </>
    );
};

export default Checkout;