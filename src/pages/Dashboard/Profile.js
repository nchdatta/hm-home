import React from 'react';

const Profile = () => {
    return (
        <div>
            <h2 className='text-md font-medium text-blue-500'>Profile</h2>
            <div>
                <div className="inline-flex overflow-hidden relative justify-center items-center w-28 h-28 bg-gray-100 rounded-full dark:bg-gray-600 my-3">
                    <span className="text-4xl font-medium text-gray-600 dark:text-gray-300">N</span>
                    {/* {user.photoURL ?
                                <img src={user.photoURL} alt={user.displayName} /> :
                                // Will display fist name 1st character
                                <span className="text-3xl"> {user.displayName.split(" ")[0][0]} </span>} */}
                </div>

                <h2 className='mb-2 text-lg font-medium'>Nayan Chandra Datta</h2>
                <p className='mb-1 text-sm text-gray-600'>Email: nayanchdatta02@gmail.com</p>
                <p className='mb-1 text-sm text-gray-600'>Phone: +8801300421748</p>
                <p className='mb-1 text-sm text-gray-600'>Country: Bangladesh</p>
            </div>
        </div>
    );
};

export default Profile;