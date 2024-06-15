import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import ExtraCard from './ExtraCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
import './StyleSheet/extra.css'

import basic from './Photo/basic.jpg'
import advanced from './Photo/advanced.jpg'
import gwoc from './Photo/GWOC.jpg'
import ww from './Photo/Web Wonders.jpg'

export default () => {
    const data = [
        {
            imgURL: ww,
            title: 'Web Wonders',
            desc: 'Nexus - DoCSE, SVNIT',
            prize: 'First Prize'
        },
        {
            imgURL: gwoc,
            title: 'Google Winter of Code-2024',
            desc: 'GDSC - SVNIT',
            prize: 'First Prize'
        },
        {
            imgURL: basic,
            title: 'Basic & Intermediate Spoken Sanskrit',
            desc: 'NPTEL & IIT Kharagpur',
            prize: 'Gold Medal'
        },
        {
            imgURL: advanced,
            title: 'Advanced Level of Spoken Sanskrit',
            desc: 'NPTEL & IIT Kharagpur',
            prize: 'Silver Medal'
        },
    ]
    return (
        <div style={{ width: "100%" }} data-aos="zoom-in-up" data-aos-duration="1000">
            <Swiper
                // install Swiper modules
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                // spaceBetween={50}
                navigation={{
                    nextEl: '#nextSlide',
                    prevEl: '#prevSlide',
                    clickable: true,
                }}
                pagination={{ el: '#pagination-box', clickable: true }}
                scrollbar={{ draggable: true }}

               
            >

                {
                    data.map(curr => {
                        return (
                            <SwiperSlide>
                                <ExtraCard {...curr} ></ExtraCard>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <div id='slider-controller'>
                <div id='prevSlide' className='navigation-btn'><FaChevronCircleLeft /></div>
                <div id='pagination-box'></div>
                <div id='nextSlide' className='navigation-btn'><FaChevronCircleRight /></div>
            </div>
        </div>
    );
};