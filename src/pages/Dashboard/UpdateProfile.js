import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import EmailField from '../../components/EmailField';
import SelectField from '../../components/SelectField';
import SubmitButton from '../../components/SubmitButton';
import TextField from '../../components/TextField';
import useCountries from '../../hooks/useCountries';
import useUpdateUser from '../../hooks/useUpdateUser';
import useUser from '../../hooks/useUser';
import auth from '../../utils/firebase.init';

const UpdateProfile = () => {
    const [currentUser] = useAuthState(auth);
    const { data: user } = useUser(currentUser.email);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const { mutate } = useUpdateUser(currentUser.email);
    const { data: countries } = useCountries()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        mutate(data, {
            onSuccess: async () => {
                await updateProfile({ displayName: data.name });
                navigate('/profile', { replace: true });
            }
        })
    }

    return (
        <div>
            <h2 className='text-md font-medium text-blue-500 mb-5'>Update Profile</h2>

            <form className='flex flex-col items-center justify-center w-full lg:w-1/3' onSubmit={handleSubmit(onSubmit)}>
                <TextField label='Full Name' id='name' value={user.name} register={register} />
                <EmailField value={user.email} register={register} readonly={true} />
                <TextField label='Phone' id='phone' value={user.phone} register={register} />
                <TextField label='Address' id='address' value={user.address} register={register} />
                <SelectField label='Country' id='country' register={register} countries={countries} />
                <SubmitButton value='Update' loading={updating} />
            </form>
        </div>
    );
};

export default UpdateProfile;