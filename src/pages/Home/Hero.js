import React from 'react';
import { Link } from 'react-router-dom';
import playStore from '../../assets/images/play_store.png';
import appStore from '../../assets/images/app-store.png';
import heroRight from '../../assets/images/hero-right.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SliderComp from '../../components/SliderComp';

const Hero = () => {
    return (
        <div className='hero min-h-screen'>

            <div className='px-4 lg:px-28'>
                <Swiper
                    autoplay
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
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