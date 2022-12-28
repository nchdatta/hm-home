import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import EmailField from '../../components/EmailField';
import SelectField from '../../components/SelectField';
import SubmitButton from '../../components/SubmitButton';
import TextField from '../../components/TextField';

const EditUserProfile = () => {
    const { email } = useParams();
    const { data: user } = useQuery('user', () => fetch(`https://hm-home.onrender.com/user/${email}`)
        .then(res => res.json()));
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    const onSubmit = async data => {
        fetch(`https://hm-home.onrender.com/user/update-profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());

        navigate('/users', { replace: true });
    }

    return (
        <div className='px-4 lg:px-28 min-h-screen w-full flex flex-col items-center my-10'>
            <h2 className='text-md font-medium text-blue-500 mb-5'>Update Profile</h2>

            <form className='flex flex-col items-center justify-center w-full lg:w-1/3' onSubmit={handleSubmit(onSubmit)}>
                <TextField label='Full Name' id='name' value={user.name} placeholder={user.name} register={register} />
                <EmailField value={user.email} register={register} />
                <TextField label='Phone' id='phone' placeholder={user.phone} register={register} />
                <TextField label='Address' id='address' placeholder={user.address} register={register} />
                <SelectField label='Country' id='country' register={register} />
                <SubmitButton value='Update' />
            </form>
        </div>
    );
};

export default EditUserProfile;