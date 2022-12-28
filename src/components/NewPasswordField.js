import React from 'react';

const NewPasswordField = ({ label, register }) => {
    return (
        <div className="w-full mb-6">
            <label htmlFor="newpassword" className="block mb-1 text-gray-900">{label}</label>
            <input type="password" {...register("newpassword")} id="newpassword" minLength='6' className=" outline-0 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5" placeholder="•••••••••" required />
        </div>
    );
};

export default NewPasswordField;