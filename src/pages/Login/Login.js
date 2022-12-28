import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';
import EmailField from '../../components/EmailField';
import PasswordField from '../../components/PasswordField';
import SubmitButton from '../../components/SubmitButton';

const Login = () => {
    const [signInWithEmailAndPassword, signing] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = async data => {
        const { email, password } = data;
        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }

    return (
        <div className='w-full lg:w-1/3 mx-auto min-h-screen my-10 px-8'>
            <div className='border rounded-md shadow-md px-5 py-8 '>
                <h2 className='text-md font-bold text-center mb-8'>Login to account</h2>

                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <EmailField register={register} />
                    <PasswordField register={register} label='Password' />
                    <SubmitButton value='Login' loading={signing} />
                </form>
                <p className='text-center text-sm mt-4'>Don't have an account? <Link to='/signup' className='text-[#2CAEE2]'>Signup now</Link> </p>
            </div>
        </div>
    );
};

export default Login;