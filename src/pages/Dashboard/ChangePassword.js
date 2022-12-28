import React from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import NewPasswordField from '../../components/NewPasswordField';
import PasswordField from '../../components/PasswordField';
import SubmitButton from '../../components/SubmitButton';
import auth from '../../utils/firebase.init';

const ChangePassword = () => {
    const { register, handleSubmit } = useForm();
    const [updatePassword, updating] = useUpdatePassword(auth);
    const navigate = useNavigate();

    const onSubmit = async data => {
        const { newpassword } = data;
        const success = await updatePassword(newpassword);
        if (success) {
            navigate('/profile', { replace: true });
        } else {
            alert("There was an error changing password. Try again later!");
        }
    }


    return (
        <div>
            <h2 className='text-md font-medium text-blue-500 mb-3'>Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/3'>
                <PasswordField register={register} label='Old Password' />
                <NewPasswordField register={register} label='New Password' />
                <SubmitButton value='Change Password' loading={updating} />
            </form>
        </div>
    );
};

export default ChangePassword;