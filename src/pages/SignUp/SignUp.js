import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const [createUserWithEmailAndPassword, user, creating, cError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const onSubmit = async data => {
        const { name, email, password } = data;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        // Insert a user 
        fetch('https://hm-home.onrender.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        }).then(res => res.json())
            .then(data => console.log(data));

        reset();
    }

    if (user) {
        navigate('/', { replace: true });
    }
    if (cError) {
        alert("There was an error while creating account.");
    }

    return (
        <div className='min-h-screen my-10'>
            <div className='w-2/3 lg:w-1/3 mx-auto border rounded-md shadow-md px-5 py-8 '>
                <h2 className='text-md font-bold text-center mb-8'>Signup</h2>

                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-6">
                        <label htmlFor="name" className="block mb-1 text-gray-900">Full Name</label>
                        <input type="text" {...register("name")} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="John Milton" required />
                    </div>
                    <div className="w-full mb-6">
                        <label htmlFor="email" className="block mb-1 text-gray-900">Email address</label>
                        <input type="email" {...register("email")} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="email@email.com" required />
                    </div>
                    <div className="w-full mb-6">
                        <label htmlFor="password" className="block mb-1 text-gray-900 dark:text-white">Password</label>
                        <input type="password" {...register("password")} id="password" minLength='6' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="•••••••••" required />
                    </div>

                    <input type='submit' value='Signup' className='text-white bg-[#2CAEE2] hover:bg-[#23a7db] px-10 py-2 rounded text-center cursor-pointer' disabled={creating} />
                </form>
                <p className='text-center text-sm mt-4'>Already have an account? <Link to='/login' className='text-[#2CAEE2]'>Login now</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;