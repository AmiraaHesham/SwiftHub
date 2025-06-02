import React from 'react'
import { FiFacebook, FiPhone } from 'react-icons/fi'
import { LuMail } from 'react-icons/lu'
import { MdDirectionsBoat } from 'react-icons/md'
import { RiTwitterXLine } from 'react-icons/ri'
import { RxInstagramLogo } from 'react-icons/rx'
import { SlSocialLinkedin } from 'react-icons/sl'

const Footer = () => {
    return (
        <div className='mt-32  bg-black w-full'>


            <div className='  flex flex-col justify-center items-center  cursor-default'>

                <div className='w-full flex md:flex-row xs:flex-col justify-between gap-10 p-10  text-white'>
                    <div className=' '>
                        <div className=' flex flex-col gap-5 '>
                            <div className="flex gap-2  items-center">
                                <MdDirectionsBoat className="text-orange-600 text-3xl" />
                                <h3 className="md:text-xl xs:text-lg font-bold font-sans">SwiftHub </h3>
                            </div>
                            <p className='lg:w-[300px] xs:w-[400px] text-md text-white/60'>Get a customized shipping quote tailored to your needs. Fast, transparent, and hassle-free pricing for all logistics solutions.
                            </p>
                            <div className='flex gap-3 items-center   text-xl'>
                                <span className='hover:text-gray-700'><FiFacebook /></span>
                                <span className='hover:text-gray-700'><RiTwitterXLine /></span>
                                <span className='hover:text-gray-700'><SlSocialLinkedin />
                                </span>
                                <span className='hover:text-gray-700'><RxInstagramLogo />

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row md:flex-col sm:flex-row xs:flex-col xs:justify-center items-center  xl:gap-32 xs:gap-10   '>
                        <div className='flex items-baseline lg:gap-10 xl:gap-32 xs:gap-10' >
                            <div className='flex flex-col gap-5'>
                                <span className='lg:text-xl xs:text-lg'>Navigation</span>
                                <div className='list-none  flex flex-col gap-1 text-sm text-white/60'>
                                    <li className='hover:text-gray-700'>Home</li>
                                    <li className='hover:text-gray-700'>About Us</li>
                                    <li className='hover:text-gray-700'>Service</li>
                                    <li className='hover:text-gray-700'>Gallery</li>
                                    <li className='hover:text-gray-700'>Contact</li>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <span className='lg:text-xl xs:text-md'>Courier Types</span>
                                <div className='list-none  flex flex-col gap-1 text-sm text-white/60'>
                                    <li className='hover:text-gray-700'>Standard</li>
                                    <li className='hover:text-gray-700'>Express</li>
                                    <li className='hover:text-gray-700'>International</li>
                                    <li className='hover:text-gray-700'>Ware Housing</li>
                                    <li className='hover:text-gray-700'>Overnight</li>
                                    <li className='hover:text-gray-700'>Pallet</li>
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <span className='lg:text-xl xs:text-lg'>Subscribe Our Newsletter</span>
                            <div className=' flex items-center w-[250px] gap-2 text-md  text-white/60 border border-white/70 py-2 px-2 rounded-full'>
                                <input className=' outline-none w-[150px] bg-black text-md placeholder:text-sm rounded-full ' placeholder='Enter your email' />
                                <button className='bg-orange-500 px-2 py-1 text-white text-sm rounded-full '>Subscribe</button>
                            </div>
                            <div className='flex items-center text-white/80 hover:text-gray-700 gap-4'>
                                <span className=' lg:text-xl xs:text-lg  '><FiPhone /></span>
                                <span className='text-sm '>(207) 555-0119</span>
                            </div>

                            <div className='flex items-center text-white/80 hover:text-gray-700 gap-4'>
                                <span className=' lg:text-xl xs:text-lg '><LuMail /></span>
                                <span className='text-sm '>swifthub12@gmial.com</span>
                            </div>

                        </div>


                    </div>
                </div>
                <div className=' flex justify-center items-center w-[100%]'>
                    <hr className='w-[95%] h-2 text-white/50' />

                </div>

                <div className="relative overflow-hidden flex flex-col items-center justify-center md:h-[100px] xl:h-[150px] xs:h-[60px] w-full">
                    <span className="text-white/60 text-sm">
                        ©Swifthub2025. Designed by
                        <span className="text-orange-500 font-bold"> Opndoo</span>
                    </span>

                    <div className="absolute  flex items-end justify-center pointer-events-none">
                        <h1 className="text-[clamp(7rem,22vw,22rem)]  xs:mt-5 md:mt-13 lg:mt-20  font-bold font-sans  text-gray-400 opacity-25 whitespace-nowrap select-none">
                            Swifthub
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
