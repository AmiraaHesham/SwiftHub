'use client';
import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

const Section3 = () => {

    const showData = (ArrowForward: string, ArrowDown: string, p: string) => {
        const arrowForward = document.getElementById(`${ArrowForward}`)
        arrowForward?.classList.toggle('hidden')
        const arrowDown = document.getElementById(`${ArrowDown}`)
        arrowDown?.classList.toggle('hidden')
        const text = document.getElementById(`${p}`)
        text?.classList.toggle('hidden')
    }

    return (
        <div className='mt-32 md:px-20 md:py-9 xs:p-3 w-full cursor-default'>
            <div className='lg:w-[650px] '>
                <h1 className='lg:text-6xl md:text-5xl xs:text-4xl'>Trusted by Businesses</h1>
                <p className='text-md md:w-[600px] xs:w-[450px] text-gray-600/70 mt-4'>
                    We deliver reliability with cutting-edge technology, real-time tracking, and a commitment to on-time performance, ensuring seamless logistics solutions.</p>
            </div>
            <div className='mt-12 flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-20  justify-center'>
                <div className='lg:w-[600px] '>
                    <div onClick={() => { showData('ArrowForward1', 'ArrowDown1', 'p-1') }}
                        className='hover:shadow-sm hover:px-4 hover:shadow-slate-600 hover:transition-all rounded-lg  '>
                        <span >
                            <span className='flex items-center py-5 justify-between'>
                                <h1 className='text-2xl '>99% On-Time Delivery</h1>
                                <span id='ArrowForward1'><IoIosArrowForward /></span>
                                <span id='ArrowDown1' className='hidden'><IoIosArrowDown /></span>
                            </span>
                            <p id='p-1' className='hidden text-md  text-gray-600/70 pb-2 '>With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule-every time.
                                Al-Powered Tracking</p>
                        </span>
                    </div>
                    <hr></hr>
                    <div onClick={() => { showData('ArrowForward2', 'ArrowDown2', 'p-2') }}
                        className='hover:shadow-sm hover:px-4 hover:shadow-slate-600 hover:transition-all rounded-lg  '>

                        <span>
                            <span className='flex items-center py-5 justify-between'>
                                <h1 className='text-2xl '>Al-Powered Tracking</h1>
                                <span id='ArrowForward2'><IoIosArrowForward /></span>
                                <span id='ArrowDown2' className='hidden'><IoIosArrowDown /></span>
                            </span>
                            <p id='p-2' className='hidden text-md  text-gray-600/70 pb-2 '>With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule-every time.
                                Al-Powered Tracking</p>
                        </span>
                    </div>
                    <hr></hr>
                    <div onClick={() => showData('ArrowForward3', 'ArrowDown3', 'p-3')}
                        className='hover:shadow-sm hover:px-4 hover:shadow-slate-600 hover:transition-all rounded-lg  '>
                        <span>
                            <span className='flex items-center py-5 justify-between'>
                                <h1 className='text-2xl '>Cost-Effective Solutions  </h1>
                                <span id='ArrowForward3'><IoIosArrowForward /></span>
                                <span id='ArrowDown3' className='hidden'><IoIosArrowDown /></span>
                            </span>
                            <p id='p-3' className='hidden text-md  text-gray-600/70 pb-2 '>With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule-every time.
                                Al-Powered Tracking</p>
                        </span>
                    </div>
                    <hr></hr>
                    <div onClick={() => showData('ArrowForward4', 'ArrowDown4', 'p-4')}
                        className='hover:shadow-sm hover:px-4 hover:shadow-slate-600 hover:transition-all rounded-lg  '>

                        <span >
                            <span className='flex items-center py-5 justify-between'>
                                <h1 className='text-2xl '>24/7 Customer Support </h1>
                                <span id='ArrowForward4'><IoIosArrowForward /></span>
                                <span id='ArrowDown4' className='hidden'><IoIosArrowDown /></span>
                            </span>
                            <p id='p-4' className='hidden text-md  text-gray-600/70 pb-2 '>With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule-every time.
                                Al-Powered Tracking</p>
                        </span>
                    </div>
                </div>
                <div className='xs:flex justify-center h-[400px]'>
                    <Image src={'/boat2.jpg'} alt='' width={600} height={100} className='rounded-xl h-[100%]' />
                </div>


            </div>
        </div>
    )
}

export default Section3
