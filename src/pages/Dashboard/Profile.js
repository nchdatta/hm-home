import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import useUser from '../../hooks/useUser';

const Profile = () => {
    const [user] = useUser();

    return (
        <div>
            <h2 className='text-md font-medium text-blue-500'>Profile</h2>
            <div className='mb-5'>
                <div className="inline-flex overflow-hidden relative justify-center items-center w-28 h-28 bg-gray-100 rounded-full dark:bg-gray-600 my-3">
                    <span className="text-4xl font-medium text-gray-600 dark:text-gray-300">
                        {user.name.split(" ")[0][0]}
                    </span>
                </div>

                <h2 className='mb-2 text-lg font-medium'>{user.name}</h2>
                <p className='mb-1 text-sm text-gray-600'>Email: {user.email}</p>
                {user.phone && <p className='mb-1 text-sm text-gray-600'>Phone: {user.phone}</p>}
                {user.address && <p className='mb-1 text-sm text-gray-600'>Address: {user.address}</p>}
                {user.country && <p className='mb-1 text-sm text-gray-600'>Country: {user.country}</p>}

            </div>
            <PrimaryButton to='/profile/update-profile' label='Update Profile' />
        </div>
    );
};

export default Profile;