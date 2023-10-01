import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import laptopImg from '../../assets/banner/laptop.png'
import cameraImg from '../../assets/banner/camera.png'
import cctvImg from '../../assets/banner/cctv.png'
import headphonesImg from '../../assets/banner/headphones.png'
import monitorImg from '../../assets/banner/monitor.png'
import tabletImg from '../../assets/banner/tablet.png'

import { Autoplay, EffectFade } from 'swiper/modules'
import { useEffect } from 'react';
import Aos from 'aos';

const Banner = () => {

    useEffect(() => {
        Aos.init()
    }, [])

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
        <div data-aos="fade-up" className='lg:h-[75vh] mt-5 min-h-[300px] h-[95vh] md:h-[30vh] my-container rounded-3xl overflow-hidden relative'>
            <Swiper
                loop={true}
                effect='fade'
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className='w-full'
            >
                {
                    photos.map(photo => <SwiperSlide style={{ backgroundColor: photo.bg }} key={photo.bg} className={`lg:pt-5 rounded-2xl overflow-hidden`}>
                        <div className='flex justify-end lg:h-[75vh] h-[95vh] md:h-[30vh]'>
                            <div></div>
                            <img src={photo.img} className='h-fit lg:h-full md:h-full' alt="" />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='absolute lg:h-[65vh] md:h-[30vh] h-[50vh] flex flex-col lg:justify-center justify-end lg:pt-12 gap-6 pb-5 lg:top-0 md:top-0 bottom-0 z-20 left-[5%] lg:w-[40vw] md:w-[45vw]'>
                <h1 className='text-5xl font-bold'>All Things Tech, One Place.</h1>
                <p>Navigating the world of gadgets has never been easier. Explore, compare, and get your tech fix, all in one hub.</p>
                <div>
                    <button className='primary-btn'>Shop</button>
                </div>
            </div>
        </div>
    );
};


export default Banner;