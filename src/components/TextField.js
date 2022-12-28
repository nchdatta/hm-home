import React from 'react';

const TextField = ({ label, id, value, placeholder, register }) => {
    return (
        <div className="w-full mb-6">
            <label htmlFor={id} className="block mb-1 text-gray-900">{label}</label>
            <input type="text" {...register(id)} id={id} defaultValue={value || ''} className=" outline-0 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder={placeholder} required />
        </div>
    );
};

export default TextField;