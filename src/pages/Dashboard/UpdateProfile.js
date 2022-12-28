import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import EmailField from '../../components/EmailField';
import SelectField from '../../components/SelectField';
import SubmitButton from '../../components/SubmitButton';
import TextField from '../../components/TextField';
import useUser from '../../hooks/useUser';
import auth from '../../utils/firebase.init';

const UpdateProfile = () => {
    const { register, handleSubmit } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [user] = useUser();

    const onSubmit = async data => {
        fetch(`https://hm-home.onrender.com/user/update-profile/${data.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());

        await updateProfile({ displayName: data.name });
        navigate('/profile', { replace: true });
    }

    return (
        <div>
            <h2 className='text-md font-medium text-blue-500 mb-5'>Update Profile</h2>

            <form className='flex flex-col items-center justify-center w-full lg:w-1/3' onSubmit={handleSubmit(onSubmit)}>
                <TextField label='Full Name' id='name' value={user.name} placeholder={user.name} register={register} />
                <EmailField value={user.email} register={register} readonly={true} />
                <TextField label='Phone' id='phone' placeholder={user.phone} register={register} />
                <TextField label='Address' id='address' placeholder={user.address} register={register} />
                <SelectField label='Country' id='country' register={register} />
                <SubmitButton value='Update' loading={updating} />
            </form>
        </div>
    );
};

export default UpdateProfile;