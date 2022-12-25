import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Header/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;

    // if(loading || loading1){
    //     return <Loading></Loading>
    // }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    // let errorElement;

    // if (error || error1) {
    //     errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    // }

    // if (user || user1) {
    //     navigate('/home');
    // }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='login_btn'>
                    <img style={{ width: '20px' ,height:'20px' }} src={google} alt="" />
                    <span className='px-2'>Sign In with Google</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='login_btn s_login'>
                    <img style={{ width: '28px' ,height:'28px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
                
            </div>
        </div>
    );
};

export default SocialLogin;