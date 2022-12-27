import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);


    const onSubmit = async data => {
        const { email, password } = data;
        await signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/', { replace: true });
    }



    return (
        <div className='min-h-screen my-10'>
            <div className='w-2/3 lg:w-1/3 mx-auto border rounded-md shadow-md px-5 py-8 '>
                <h2 className='text-md font-bold text-center mb-8'>Login to account</h2>

                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-6">
                        <label htmlFor="email" className="block mb-1 text-gray-900">Email address</label>
                        <input type="email" id="email" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="email@email.com" required />
                    </div>
                    <div className="w-full mb-6">
                        <label htmlFor="password" className="block mb-1 text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="•••••••••" required />
                    </div>

                    <input type='submit' value='Login' className='text-white bg-[#2CAEE2] hover:bg-[#23a7db] px-10 py-2 rounded text-center cursor-pointer' />
                </form>
                <p className='text-center text-sm mt-4'>Don't have an account? <Link to='/signup' className='text-[#2CAEE2]'>Signup now</Link> </p>
            </div>
        </div>
    );
};

export default Login;