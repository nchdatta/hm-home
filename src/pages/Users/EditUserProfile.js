import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import EmailField from '../../components/EmailField';
import SelectField from '../../components/SelectField';
import SubmitButton from '../../components/SubmitButton';
import TextField from '../../components/TextField';
import useCountries from '../../hooks/useCountries';
import useUpdateUser from '../../hooks/useUpdateUser';
import useUser from '../../hooks/useUser';

const EditUserProfile = () => {
    const { email } = useParams();
    const { data: user } = useUser(email);
    const { mutate } = useUpdateUser(email);
    const { data: countries } = useCountries();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        mutate(data, {
            onSuccess: () => {
                navigate('/users', { replace: true });
            }
        })
    }


    return (
        <div className='px-4 lg:px-28 min-h-screen w-full flex flex-col items-center my-10'>
            <h2 className='text-md font-medium text-blue-500 mb-5'>Update Profile</h2>

            <form className='flex flex-col items-center justify-center w-full lg:w-1/3' onSubmit={handleSubmit(onSubmit)}>
                <TextField label='Full Name' id='name' value={user.name} register={register} />
                <EmailField value={user.email} register={register} readonly={true} />
                <TextField label='Phone' id='phone' value={user.phone} register={register} />
                <TextField label='Address' id='address' value={user.address} register={register} />
                <SelectField label='Country' id='country' register={register} countries={countries} />
                <SubmitButton value='Update' />
            </form>
        </div>
    );
};

export default EditUserProfile;