import React from 'react';

const NameField = ({ register }) => {
    return (
        <div className="w-full mb-6">
            <label htmlFor="name" className="block mb-1 text-gray-900">Full Name</label>
            <input type="text" {...register("name")} id="name" className=" outline-0 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="John Milton" required />
        </div>
    );
};

export default NameField;