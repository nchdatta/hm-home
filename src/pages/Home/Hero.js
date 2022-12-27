import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SliderComp from '../../components/SliderComp';

const Hero = () => {
    return (
        <div className='relative'>
            <div className='hero-bg-left'></div>
            <div className='hero-bg-right'></div>

            <div className='px-4 lg:px-28'>
                <Swiper
                    autoplay={{
                        delay: 2500
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">

                    {
                        [1, 2, 3, 4].map((item) =>
                            <SwiperSlide key={item}>
                                <SliderComp />
                            </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Hero;