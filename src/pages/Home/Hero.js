import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SliderComp from '../../components/SliderComp';

const Hero = () => {
    return (
        <div className='hero min-h-screen relative'>
            <div className='hero-bg-left'></div>
            <div className='hero-bg-right'></div>

            <div className='px-4 lg:px-28'>
                <Swiper
                    autoplay={{
                        delay: 1000000
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">

                    <SwiperSlide>
                        <SliderComp />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderComp />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderComp />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderComp />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Hero;