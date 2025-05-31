'use client';
import React, { Suspense } from 'react'
import Image from 'next/image'
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const testimonials = [
    {
        rating: 5,
        text: "Exceptional service and on-time deliveries every time! The tracking system is highly accurate and customer support is helpful.",
        name: "Jidan.D",
        role: "CEO",
        img: "/person1.jpeg",
    },
    {
        rating: 4.5,
        text: "Great service! Real-time tracking kept me informed and the delivery was smooth. Highly recommended!",
        name: "Sara T.",
        role: "Client",
        img: "/person2.jpeg",
    },
    {
        rating: 5,
        text: "Reliable from start to finish. The team was responsive, and deliveries were always on schedule.",
        name: "Mark P.",
        role: "Developer",
        img: "/person3.jpeg",
    },
    {
        rating: 4,
        text: "Reliable from start to finish. The team was responsive, and deliveries were always on schedule.",
        name: "Mark P.",
        role: "Developer",
        img: "/person4.jpeg",
    },
];
const Section6 = () => {


    return (
        <div className='mt-32 w-full '>
            <div className=' relative text-center justify-center flex flex-col gap-4  '>
                <h1 className='md:text-5xl lg:text-6xl  xs:text-4xl'>Trusted by Businesses</h1>
                <span className='flex justify-center '>
                    <p className=' text-gray-600/70 xs:text-lg md:text-xl xs:w-[400px] sm:w-[800px] '>
                        We deliver reliability with cutting-edge technology, real-time tracking, and a commitment to on-time performance, ensuring seamless logistics solutions.</p></span>
            </div>
            <Suspense fallback={<div>Loading component...</div>}>
                <div className='  mt-10  rounded-lg flex justify-center items-center  cursor-default '>

                    <Swiper
                        slidesPerView={3}
                        modules={[Navigation, EffectCoverflow]}
                        spaceBetween={-100}
                        effect={'coverflow'}
                        grabCursor={false}
                        centeredSlides={false}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}

                        navigation={{
                            nextEl: '.next-btn',
                            prevEl: '.prev-btn',
                        }}


                    >
                        {testimonials.map((data, index) => {
                            const stars = (data.rating / 5) * 5;

                            const fullStars = Math.floor(stars);
                            const halfStar = stars % 1 >= 0.5 ? 1 : 0;
                            const emptyStars = 5 - fullStars - halfStar;
                            return <SwiperSlide key={index} className='bg-gray-100 shadow-lg mb-10 shadow-gray-500 rounded-xl p-10  felx justify-center items-center ' >
                                <div className='flex flex-col gap-6 w-[500px] h-[250px]'>
                                    <span className='flex text-xl'>
                                        {Array(fullStars).fill(fullStars)
                                            .map((_, index) => (
                                                <FaStar key={`full-${index}`} className='text-orange-300' />
                                            ))}

                                        {halfStar === 1 && (
                                            <FaStarHalfAlt className='text-orange-300' />
                                        )}

                                        {Array(emptyStars)
                                            .fill(emptyStars)
                                            .map((_, index) => (
                                                <FaRegStar key={`empty-${index}`} className='text-orange-300' />
                                            ))}
                                    </span>
                                    <p className='xl:w-[100%] h-[50%] md:w-[290px] xl:text-2xl md:text-lg xs:text-md xs:w-[180px]  text-gray-900/50'>
                                        {data.text}
                                    </p>
                                    <span className='flex gap-4 mt-6'>
                                        <div>
                                            <Image src={data.img} alt='' width={40} height={40} className='rounded-full' />
                                        </div>
                                        <div className='flex flex-col '>
                                            <span className='text-xl'> {data.name}</span>
                                            <span className='text-xs  text-gray-900/50'> {data.role}</span>
                                        </div>


                                    </span>
                                </div>
                            </SwiperSlide>

                        })}
                        <div className=' flex flex-col justify-center items-center relative my-10 '>
                            <div className=' bg-black p-1 rounded-full absolute flex gap-2 justify-center items-center  '>
                                <button className='prev-btn p-1 rounded-full hover:bg-orange-600 border-2 border-orange-600  hover:text-white text-orange-600 text-3xl   font-bold '><IoIosArrowRoundBack /></button>
                                <button className='next-btn p-1 rounded-full hover:bg-orange-600 border-2 border-orange-600   text-orange-600 hover:text-white text-3xl   font-bold'><IoIosArrowRoundForward className='text-3xl font-bold' />
                                </button>

                            </div>
                            <hr className='w-[80%] bg-black h-[2px]  '></hr>
                        </div>
                    </Swiper>
                </div>


            </Suspense>
        </div>
    )
}

export default Section6
