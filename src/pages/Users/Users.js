import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://hm-home.onrender.com/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);


    return (
        <div className="px-4 lg:px-28 overflow-x-auto min-h-screen mt-10">
            <h2 className='text-xl text-[#2CAEE2] mb-5'>Users List</h2>
            <table className="w-full text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left font-medium text-gray-900">Sl.</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-900">Name</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-900">Email Address</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index) =>
                            <tr key={user._id}>
                                <td className="px-4 py-2 font-medium text-gray-600">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-2 font-medium text-gray-600">
                                    {user.name}
                                </td>
                                <td className="px-4 py-2 font-medium text-gray-600">
                                    {user.email}
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default Users;