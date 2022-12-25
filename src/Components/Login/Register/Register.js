import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { NavLink } from 'react-router-dom';
import Footer from '../../Footer/Footer';
// import auth from '../../../firebase.init';
import { useLocation } from 'react-router-dom';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


      const emailElement = useRef('');
      const passwordElement = useRef('');
      const navigate =useNavigate();
      const location = useLocation();
  
       let from = location.state?.from?.pathname || "/";
  
       if (user) {
          navigate(from, { replace: true });
      }

    const focusInput = event => {
        event.preventDefault();
        const email = emailElement.current.value;
        const password = passwordElement.current.value;

        console.log(email,password)
        createUserWithEmailAndPassword(email,password);
    };

    const nevigateLogin = event =>{
        navigate('/login')
    }


    return (
        <>
            <section className='login m-0'>
                <div className='container-fluid'>
                    <div className='row align-items-center justify-content-center'>

                        <div className='col-lg-6'>
                            <div className="login_box">                              

                                <div className="login_form px-lg-5 pt-lg-4 pb-lg-3 px-4 py-2">                              
                                
                                    <form onSubmit={focusInput} >
                                        <div className="form-body">
                                        <h4 className="l_header mb-4">Sign up Form</h4>
                                            <div className="username mb-3">
                                                <label hidden className="form-label" for="firstName">First Name </label>
                                                <input className="form-control" type="text" id="firstName" placeholder="First Name" required/>
                                            </div>
                                            <div className="lastname mb-3">
                                                <label hidden className="form-label" for="lastName">Last Name </label>
                                                <input  type="text" name="" id="lastName"  className="form-control"placeholder="LastName" required/>
                                            </div>
                                            <div className="email mb-3">
                                                <label hidden className="form-label" for="email">Email </label>
                                                <input ref={emailElement} type="email" id="email" className="form-control" placeholder="Email" required/>
                                            </div>
                                            <div className="password mb-3">
                                                <label hidden className="form-label" for="password">Password </label>
                                                <input className="form-control" type="password"  id="password" placeholder="Password" required/>
                                            </div>
                                            <div className="confirm-password mb-3">
                                                <label hidden className="form-label" for="confirmPassword">Confirm Password </label>
                                                <input ref={passwordElement} className="form-control" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                                            </div>
                                        </div>
                                        <Button className='btn login_btn' type="submit" style={{alignItem: 'center'}}>Sign Up</Button>
                                        <p className="mt-3 ps-1">Already have an account? <Link className='text-danger pe-auto text-decoration-none' onClick={nevigateLogin} to='/login' style={{color:'#157347'}}>Sign in</Link></p>
                                    </form>                                
                                
                                </div>
                                
                            </div>

                        </div>


                    </div>




                    
                    
                    
                        
                </div>
            </section>
        </>
         
    );
};

export default Register;



