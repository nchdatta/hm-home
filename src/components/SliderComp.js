import React from 'react';
import { Link } from 'react-router-dom';
import playStore from '../assets/images/play_store.png';
import appStore from '../assets/images/app-store.png';
import heroRight from '../assets/images/hero-right.png';


const SliderComp = () => {
    return (
        <div className="flex justify-between items-center py-12">
            <div className="flex flex-col px-2 lg:px-60">
                <h2 className='text-lg lg:text-4xl font-semibold'>Protect and Take Care of Your Health</h2>
                <p className='text-sm lg:text-lg mt-3 mb-3 lg:mb-10'>Download Our App and feel free to take your Health Advice from a Specialist.</p>
                <Link to='/' className='mb-3 lg:mb-10 border-0 outline-0 text-sm lg:text-lg font-normal py-2 px-4 text-white bg-[#2CAEE2] hover:bg-[#23a7db] rounded-[39px] text-center'>Search for a Service</Link>
                <div className="flex gap-2 lg:gap-7">
                    <img src={playStore} className='w-1/3 lg:w-full' alt="" />
                    <img src={appStore} className='w-1/3 lg:w-full' alt="" />
                </div>
            </div>
            <img src={heroRight} className="w-1/2" alt="" />
        </div>
    );
};

export default SliderComp;