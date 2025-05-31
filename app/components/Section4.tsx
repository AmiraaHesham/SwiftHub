import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { MdOutlineDoorFront } from 'react-icons/md'
import { SlEnergy } from 'react-icons/sl'

const Section4 = () => {
    return (
        <div className='mt-32 md:px-20 md:py-9 xs:p-3 cursor-default md:block xs:flex xs:flex-col xs:justify-center' >
            <div >
                <div className='flex justify-between items-center'>
                    <h1 className='lg:text-6xl xs:text-4xl lg:w-[600px] xs:w-[300px]   '>Comprehensive  Logistics Services</h1>
                    <div>
                        <button className='bg-orange-500 py-2 px-3 rounded-full hover:shadow-md hover:shadow-orange-400 text-white'>View all Service</button>
                    </div>
                </div>
                <div className=' mt-5 flex xl:justify-end xl:items-end xs:justify-center xs:items-center text-gray-600/70'>
                    <p className='xl:w-[500px]  xl:text-lg xs:text-md'>We deliver reliability with cutting-edge technology, real-time tracking, and a commitment to on-time performance, ensuring seamless logistics solutions.
                    </p>
                </div>

            </div>
            <div className='flex justify-center mt-10 items-center '>
                <div className='mt-[40px] grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-y-10 gap-x-20 '>
                    <div className='group  bg-gray-100/70 flex flex-col gap-3 px-4 hover:shadow-lg hover:text-white hover:bg-black hover:transition-all cursor-default rounded-xl  w-[330px] h-[320px] p-3 '>
                        <div className='flex justify-between items-baseline'>
                            <span className='text-2xl  text-black/80  bg-gray-300/30 group-hover:bg-white p-4 rounded-full'>
                                <SlEnergy />
                            </span>
                            <span className=' p-2 rounded-full text-3xl  font-extrabold'>
                                <GoArrowUpRight />

                            </span>
                        </div>
                        <span className='text-2xl mt-20'>
                            Express Shipping
                        </span>
                        <span className='text-gray-600/85 group-hover:text-white'>
                            Get your shipments delivered at lightning speed with our express shipping service. We prioritize fast processing, quick dispatch, and on-time a...
                        </span>

                    </div>
                    <div className='group  bg-gray-100/70 flex flex-col gap-3 px-4 hover:shadow-lg hover:text-white hover:bg-black hover:transition-all cursor-default rounded-xl  w-[330px] h-[320px] p-3 '>
                        <div className='flex justify-between items-baseline'>
                            <span className='text-2xl  text-black/80  bg-gray-300/30 group-hover:bg-white p-4 rounded-full'>
                                <MdOutlineDoorFront />
                            </span>
                            <span className=' p-2 rounded-full text-3xl k font-extrabold'>
                                <GoArrowUpRight />

                            </span>
                        </div>
                        <span className='text-2xl mt-20'>
                            Door-to-Door Delivery
                        </span>
                        <span className='text-gray-600/85 group-hover:text-white'>
                            Experience convenience with our door-to-door service, ensuring your shipments are picked up and delivered directly to their destination. We...
                        </span>

                    </div>
                    <div className='group  bg-gray-100/70 flex flex-col gap-3 px-4 hover:shadow-lg hover:text-white hover:bg-black hover:transition-all cursor-default rounded-xl  w-[330px] h-[320px] p-3 '>
                        <div className='flex justify-between items-baseline'>
                            <span className='text-2xl  text-black/80  bg-gray-300/30 group-hover:bg-white p-4 rounded-full'>
                                <HiOutlineGlobeAlt />

                            </span>
                            <span className=' p-2 rounded-full text-3xl k font-extrabold'>
                                <GoArrowUpRight />

                            </span>
                        </div>
                        <span className='text-2xl mt-20'>
                            International Shipping
                        </span>
                        <span className='text-gray-600/85 group-hover:text-white'>
                            We offer reliable international shipping solutions, ensuring your goods reach global destinations safely and on time. Trust us for se...                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
