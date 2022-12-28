import React from 'react';

const SubmitButton = ({ loading, value }) => {
    return (
        <input type='submit' value={value} className='text-white bg-[#2CAEE2] hover:bg-[#23a7db] px-10 py-2 rounded text-center cursor-pointer' disabled={loading} />
    );
};

export default SubmitButton;