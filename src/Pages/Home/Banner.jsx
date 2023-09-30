import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import laptopImg from '../../assets/banner/laptop.png'
import cameraImg from '../../assets/banner/camera.png'
import cctvImg from '../../assets/banner/cctv.png'
import headphonesImg from '../../assets/banner/headphones.png'
import monitorImg from '../../assets/banner/monitor.png'
import printerImg from '../../assets/banner/printer.png'
import tabletImg from '../../assets/banner/tablet.png'

import { Autoplay } from 'swiper/modules'

const Banner = () => {
    return (
        <div className='h-screen'>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='w-full'
            >
                <SwiperSlide className='bg-[#c0affc] pt-16'>
                    <div className='grid lg:grid-cols-2 my-container h-[90vh]'>
                        <div></div>
                        <img src={laptopImg} className='w-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[#9bf5c4] pt-16'>
                    <div className='grid lg:grid-cols-2 my-container h-[90vh]'>
                        <div></div>
                        <img src={headphonesImg} className='w-[90%]' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;