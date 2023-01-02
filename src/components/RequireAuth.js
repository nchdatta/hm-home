import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../utils/firebase.init';
import Loading from './Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) { return <Loading /> }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return (
            <div className='min-h-[70vh] lg:w-1/2 mx-auto flex flex-col justify-start items-center mt-12'>
                <h3 class="text-2xl mb-3">Thanks for signing up for Hm Home!</h3>
                <p>We're happy you're here. Let's get your email address verified.</p>
                <p className='my-2'>Please check your email inbox/spam.</p>
                <p className='mt-2 text-green-600'>Email address registered: <code>{user.email}</code></p>
                <button onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        alert('Sent email');
                    } else {
                        alert("Something error has happed.")
                    }
                }} className='mt-2 text-white bg-[#2CAEE2] hover:bg-[#23a7db] px-10 py-2 rounded-lg text-center cursor-pointer'>Click to verify email</button>
            </div>
        );
    }
    return children;
};

export default RequireAuth;