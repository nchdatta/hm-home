import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { getUsers } from '../../apis/userAPI';
import ConfirmModal from '../../components/ConfirmModal';
import PrimaryButton from '../../components/PrimaryButton';
import useDeleteUser from '../../hooks/useDeleteUser';
import auth from '../../utils/firebase.init';

const Users = () => {
    const [currentUser] = useAuthState(auth);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const { data: users } = useQuery(['users', page], () => getUsers(page, limit), {
        keepPreviousData: true
    });
    const [isModal, setIsModal] = useState(false);
    const [userId, setUserId] = useState('');
    const { mutate } = useDeleteUser(page, userId);

    const handleDelete = async () => {
        mutate(userId, {
            onSuccess: () => {
                setIsModal(false)
            }
        });
    }
    const handlePrev = prev => setPage(page - 1);
    const handleNext = prev => setPage(page + 1);

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
                            users.data.map((user, index) =>
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

            <div className="flex flex-wrap justify-center gap-2">
                <button onClick={() => handlePrev(page)} className="px-3.5 py-1 rounded-sm outline-0 bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400" disabled={page === 1}>Prev</button>
                {
                    [...Array(users.meta.totalPages).keys()].map(number =>
                        <button key={number} onClick={() => setPage(number + 1)}
                            className={`px-3.5 py-1 ${(number + 1) === page ? 'bg-[#25ace1] text-white' : 'bg-gray-100'} rounded-sm outline-0`}>
                            {number + 1}
                        </button>)
                }
                <button onClick={() => handleNext(page)} className="px-3.5 py-1 rounded-sm outline-0 bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400" disabled={page === users.meta.totalPages}>Next</button>
            </div>

            {isModal && <ConfirmModal setIsModal={setIsModal} handleDelete={handleDelete} />}
        </div>
    );
};

export default Users;