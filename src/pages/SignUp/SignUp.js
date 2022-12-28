import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';
import TextField from '../../components/TextField';
import EmailField from '../../components/EmailField';
import PasswordField from '../../components/PasswordField';
import SubmitButton from '../../components/SubmitButton';

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
        <div className='w-full lg:w-1/3 mx-auto min-h-screen my-10 px-8'>
            <div className='border rounded-md shadow-md px-5 py-8 '>
                <h2 className='text-md font-bold text-center mb-8'>Signup</h2>

                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <TextField label='Full Name' id='name' placeholder='John Milton' register={register} />
                    <EmailField register={register} />
                    <PasswordField register={register} label='Password' />
                    <SubmitButton value='Signup' loading={creating} />
                </form>
                <p className='text-center text-sm mt-4'>Already have an account? <Link to='/login' className='text-[#2CAEE2]'>Login now</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;