import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery, focusManager } from 'react-query';
import ConfirmModal from '../../components/ConfirmModal';
import PrimaryButton from '../../components/PrimaryButton';
import usePages from '../../hooks/usePages';
import auth from '../../utils/firebase.init';

const Users = () => {
    // Override the default focus state
    focusManager.setFocused(true);
    const size = 3;
    const [currentUser] = useAuthState(auth);
    const [totalPages] = usePages(size);
    const [page, setPage] = useState(0);
    const { data: users, refetch } = useQuery('users', () => fetch(`https://hm-home.onrender.com/user?page=${page}&size=${size}`)
        .then(res => res.json()));
    const [isModal, setIsModal] = useState(false);
    const [userId, setUserId] = useState('');


    const handleDelete = async () => {
        try {
            const res = await fetch(`https://hm-home.onrender.com/user/delete/${userId}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.success) {
                setIsModal(false);
                refetch();
            }
        } catch (error) {
            if (error) {
                alert("There was a problem while deleting account.");
            }
        }
    }


    return (
        <div className="px-4 lg:px-28 min-h-screen mt-10">
            <h2 className='text-xl text-[#2CAEE2] mb-5'>Users List</h2>

            <div className='w-full overflow-x-auto mb-20'>
                <table className="w-full text-sm mb-3">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 text-left py-3 font-medium text-gray-900">Sl.</th>
                            <th className="px-4 text-left py-3 font-medium text-gray-900">Name</th>
                            <th className="px-4 text-left py-3 font-medium text-gray-900">Email Address</th>
                            <th className="px-4 text-left py-3 font-medium text-gray-900">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id} className='border-b'>
                                    <td className="whitespace-nowrap px-4 py-2.5 text-gray-600">
                                        {index + 1}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2.5 text-gray-600">
                                        {user.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2.5 text-gray-600">
                                        {user.email}
                                    </td>
                                    <td className='flex items-center py-2.5'>
                                        <PrimaryButton to={`/users/edit-user/${user.email}`} label='Edit' />
                                        <button onClick={() => {
                                            setUserId(user._id);
                                            setIsModal(true);
                                        }}
                                            disabled={user.email === currentUser?.email}
                                            className='ml-2 border-0 outline-0 text-base font-normal py-2 px-6 text-white bg-red-500 hover:bg-red-400 disabled:bg-red-300 rounded-[39px]'>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <div className="text-center">
                {
                    [...Array(totalPages).keys()].map(number =>
                        <button key={number} onClick={() => setPage(number)}
                            className={`px-3.5 py-1 ${number === page ? 'bg-[#25ace1] text-white' : 'bg-gray-100'} rounded-sm outline-0 mr-2`}>
                            {number + 1}
                        </button>)
                }
            </div>

            {isModal && <ConfirmModal setIsModal={setIsModal} handleDelete={handleDelete} />}
        </div>
    );
};

export default Users;