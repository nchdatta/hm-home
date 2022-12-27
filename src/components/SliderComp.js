import React from 'react';
import { Link } from 'react-router-dom';
import playStore from '../assets/images/play_store.png';
import appStore from '../assets/images/app-store.png';
import heroRight from '../assets/images/hero-right.png';


const SliderComp = () => {
    return (
        <div className="flex justify-between items-center py-12">
            <div className="flex flex-col px-72">
                <h2 className='text-4xl font-semibold'>Protect and Take Care of Your Health</h2>
                <p className='text-lg mt-3 mb-10'>Download Our App and feel free to take your Health Advice from a Specialist.</p>
                <Link to='/login' className='mb-10 border-0 outline-0 text-lg font-normal py-2 px-9 text-white bg-[#2CAEE2] hover:bg-[#23a7db] rounded-[39px] text-center'>Search for a Service</Link>
                <div className="flex gap-7">
                    <img src={playStore} alt="" />
                    <img src={appStore} alt="" />
                </div>
            </div>
            <img src={heroRight} alt="" />
        </div>
    );
};

export default SliderComp;