import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, label }) => {
    return (
        <Link to={to} className='border-0 outline-0 text-base font-normal py-2 px-6 text-white bg-[#2CAEE2] hover:bg-[#23a7db] rounded-[39px]'>
            {label}
        </Link>
    );
};

export default PrimaryButton;