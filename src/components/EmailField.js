import React from 'react';

const EmailField = ({ register }) => {
    return (
        <div className="w-full mb-6">
            <label htmlFor="email" className="block mb-1 text-gray-900">Email address</label>
            <input type="email" {...register("email")} id="email" className=" outline-0 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="email@email.com" required />
        </div>
    );
};

export default EmailField;