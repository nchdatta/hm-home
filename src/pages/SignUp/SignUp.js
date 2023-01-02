import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';
import TextField from '../../components/TextField';
import EmailField from '../../components/EmailField';
import PasswordField from '../../components/PasswordField';
import SubmitButton from '../../components/SubmitButton';
import { useMutation, useQueryClient } from 'react-query';
import { createUser } from '../../apis/userAPI';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, creating, cError] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true,
        emailVerificationOptions: {
            url: "https://hmhome.netlify.app"
        }
    });
    const [updateProfile] = useUpdateProfile(auth);
    const qClient = useQueryClient();
    const { mutateAsync } = useMutation(data => createUser(data), {
        onSuccess: () => {
            qClient.invalidateQueries('user');
        }
    })
    const navigate = useNavigate();

    const onSubmit = async data => {
        const { name, email, password } = data;

        // Insert a user 
        await mutateAsync({ name, email, password });
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/', { replace: true });
    }


    return (
        <div className='w-full lg:w-1/3 mx-auto min-h-screen my-10 px-8'>
            <div className='border rounded-md shadow-md px-5 py-8 '>
                <h2 className='text-md font-bold text-center mb-8'>Signup</h2>

                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <TextField label='Full Name' id='name' placeholder='John Milton' register={register} />
                    <EmailField register={register} cError={cError} />

                    <PasswordField register={register} label='Password' />
                    <SubmitButton value='Signup' loading={creating} />
                </form>
                <p className='text-center text-sm mt-4'>Already have an account? <Link to='/login' className='text-[#2CAEE2]'>Login now</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;