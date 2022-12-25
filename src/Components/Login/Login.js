/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import SocialLogin from './SocialLogin/SocialLogin';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const emailElement = useRef('');
    const passwordElement = useRef('');
    const navigate =useNavigate();
    const location=useLocation();

    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
        navigate(from, { replace: true });
      }

    const focusInput = event => {
        event.preventDefault();
        const email = emailElement.current.value;
        const password = passwordElement.current.value;
        console.log(email,password)
        signInWithEmailAndPassword(email, password)

    };

    const nevigateRegister = event =>{
        navigate('/register')
    }
    return (
        <>
        <section className='login m-0'>
            <div className='container-fluid'>
                <div className='row align-items-center justify-content-center'>

                    <div className='col-xl-8 col-lg-10'>
                        <div className="login_box">
                            <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="login_img d-lg-block d-none">
                                    <img src="images/login_img.jpg" className="img-fluid w-100 p-0 m-0"/>
                                </div>
                            </div>

                            <div className="col-lg-6 align-self-center">
                                <div className="login_form ps-lg-3 pe-lg-5 p-4">
                                
                                <NavLink to="/" className="logo2 text-center mb-4">
                                    <img src="images/logo.png" className="img-fluid" alt="bookworms"/>
                                </NavLink>

                                <Form onSubmit={focusInput}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label hidden>Email address</Form.Label>
                                        <Form.Control ref={emailElement} type="email" placeholder="Enter email" required/>
                                    
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label hidden>Password</Form.Label>
                                        <Form.Control ref={passwordElement} type="password" placeholder="Password" required />
                                    </Form.Group>
                                                    
                                    <NavLink onClick={focusInput} type="submit" className='login_btn'>Login</NavLink>
                                </Form>
                                <p className='mt-2'>New to BookWorms ?<Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={nevigateRegister}> Please Register</Link></p>
                                <SocialLogin></SocialLogin>
                                
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>


                </div>




                
                
                
                    
            </div>
        </section>
        </>
    );
};

export default Login;
