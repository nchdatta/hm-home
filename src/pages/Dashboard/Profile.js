import React, { useState } from 'react';
import { useAuthState, useDeleteUser as useDeleteFromFirebase } from 'react-firebase-hooks/auth';
import ConfirmModal from '../../components/ConfirmModal';
import PrimaryButton from '../../components/PrimaryButton';
import useUser from '../../hooks/useUser';
import useDeleteUser from '../../hooks/useDeleteUser';
import auth from '../../utils/firebase.init';

const Profile = () => {
    const [currentUser] = useAuthState(auth);
    const { data: user } = useUser(currentUser.email);
    const [deleteUser] = useDeleteFromFirebase(auth);
    const { mutate } = useDeleteUser();
    const [isModal, setIsModal] = useState(false);

    const handleDelete = () => {
        mutate(user._id, {
            onSuccess: async () => {
                await deleteUser();
                setIsModal(false);
            }
        })
    }


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
            <div className="flex flex-wrap gap-2">
                <PrimaryButton to='/profile/update-profile' label='Update Profile' />
                <button onClick={() => setIsModal(true)}
                    className='border-0 outline-0 text-base font-normal py-2 px-6 text-white bg-red-500 hover:bg-red-400 disabled:bg-red-300 rounded-[39px]'>
                    Delete Account</button>
            </div>

            {isModal && <ConfirmModal setIsModal={setIsModal} handleDelete={handleDelete} />}

        </div>
    );
};

export default Profile;