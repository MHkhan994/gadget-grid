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

    const photos = [
        {
            img: laptopImg,
            bg: '#9bf5c4'
        },
        {
            img: headphonesImg,
            bg: '#c0affc'
        },
        {
            img: cctvImg,
            bg: '#f7a5e2'
        },
        {
            img: cameraImg,
            bg: '#96bafd'
        },
        {
            img: monitorImg,
            bg: '#fcf6a0'
        },
        {
            img: tabletImg,
            bg: '#fda4a4'
        }
    ]

    return (
        <div className='h-screen relative'>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='w-full'
            >
                {
                    photos.map(photo => <SwiperSlide key={photo.bg} className={`bg-[${photo.bg}] pt-16`}>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 my-container h-[90vh] md:h-[40vh] md:items-center pb-64 lg:h-[90vh]'>
                            <div></div>
                            <img src={photo.img} className='w-full md:pt-10' alt="" />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='absolute lg:h-screen md:h-[40vh] h-[50vh] flex flex-col lg:justify-center justify-end pb-10 lg:pb-0 gap-6 lg:top-0 md:top-0 bottom-0 z-20 left-[5%] lg:w-[40vw] md:w-[45vw]'>
                <h1 className='text-4xl font-bold'>All Things Tech, One Place.</h1>
                <p>Navigating the world of gadgets has never been easier. Explore, compare, and get your tech fix, all in one hub.</p>
                <div>
                    <button className='primary-btn'>Shop</button>
                </div>
            </div>
        </div>
    );
};


export default Banner;