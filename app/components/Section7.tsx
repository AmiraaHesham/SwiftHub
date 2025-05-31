import React from 'react'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'
const Section7 = () => {
    return (
        <div className='mt-32 md:px-20 md:py-9 xs:p-3'>
            <div >
                <div className='flex justify-between items-center'>
                    <h1 className='lg:text-6xl xs:text-4xl    '>Latest Logistics Insights
                    </h1>

                </div>
                <div className=' mt-5 flex justify-between text-gray-600/70'>
                    <p className='xs:w-[380px] lg:w-[650px] xl:text-lg xs:text-md'>Stay updated with industry trends, innovative solutions, and expert tips to optimize your supply chain and enhance efficiency.

                    </p>
                    <div>
                        <button className='bg-orange-500 py-2 xs:px-3 lg:px-8 rounded-full hover:shadow-md hover:shadow-orange-400 text-white'>View all </button>
                    </div>
                </div>

            </div>
            <div className='mt-20'>
                <div className=' gap-10 flex lg:flex-row xs:flex-col  justify-center items-center w-full'>

                    <div className='xs:w-[90%] lg:w-[50%]   '>
                        <div className='h-[450px]'>
                            <Image src={'/containers.jpg'} alt={''} width={650} height={100} className='rounded-2xl w-full h-full' />

                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <span className='text-2xl'>Smart Logistics Trends</span>
                            <span className='text-xl p-2 rounded-full bg-gray-300/40 '> <GoArrowUpRight /></span>
                        </div>
                        <span className='text-gray-600/70'>12 February 2025</span>
                    </div>   <div className='xs:w-[90%] lg:w-[50%]   '>
                        <div className='h-[450px]'>
                            <Image src={'/shipping.jpg'} alt={''} width={650} height={100} className='rounded-2xl w-full h-full' />

                        </div>
                        <div className='flex justify-between items-center mt-6 '>
                            <span className='text-2xl'>SReliable Shipping Strategies</span>
                            <span className='text-xl p-2 rounded-full bg-gray-300/40 '> <GoArrowUpRight /></span>
                        </div>
                        <span className='text-gray-600/70'>14 January 2025</span>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Section7
