import React from 'react';

const SelectField = ({ label, id, register, countries }) => {
    return (
        <div className="w-full mb-6">
            <label htmlFor={id} className="block mb-1 text-gray-900">{label}</label>
            <select id={id}  {...register(id)} className="outline-0 border border-gray-300 text-gray-900 text-sm rounded focus:border-[#2CAEE2] block w-full p-2.5">
                {countries.map(c => <option key={c.code}>{c.name}</option>)}
            </select>
        </div>
    );
};

export default SelectField;