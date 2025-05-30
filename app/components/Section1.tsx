import React from 'react'
import { IoStar } from "react-icons/io5";

import Image from "next/image";
import { WiMoonWaningCrescent2, WiMoonWaxingCrescent4 } from 'react-icons/wi';
const Section1 = () => {
    return (
        <div>
            <div className="flex flex-col text-center mt-28 justify-center items-center font-serif">
                <h1 className=" md:text-7xl xs:text-4xl font-bold md:w-[800px] xs:w-[400px]">
                    Seamless Logistics,
                    Faster <span className="text-teal-600">Deliveries</span>
                </h1>

                <h6 className="text-gray-500 md:text-xl xs:text-lg mt-5">Streamlined freight management with real-time tracking.</h6>
            </div>


            <div className="flex justify-center relative  items-center mt-16 rounded-3xl " >

                <Image src={'/boat.jpg'} alt="" width={1300} height={100} className="  rounded-3xl w-[100%] h-[600px] " />

                <div className="flex lg:flex-row xs:flex-col absolute lg:justify-between lg:items-center w-full top-0">
                    <div className=" block lg:order-1 xs:order-2 xs:mt-3 md:w-[40%] rounded-t-xl p-3">
                        <div className="flex items-center text-white gap-2 bg-white/25 backdrop-blur-lg w-[220px] rounded-xl p-2">
                            <div className=" flex -space-x-4">
                                <Image src={'/person1.jpeg'} alt="" width={35} height={0} className="rounded-full h-[30px]  border border-white" />
                                <Image src={'/person2.jpeg'} alt="" width={35} height={0} className="rounded-full h-[30px] border border-white " />
                                <Image src={'/person3.jpeg'} alt="" width={35} height={0} className="rounded-full h-[30px]  border border-white" />
                                <Image src={'/person4.jpeg'} alt="" width={35} height={0} className="rounded-full  h-[30px] border border-white" />
                            </div>
                            <span >+10M User</span>
                        </div>
                    </div>
                    <div className="flex relative   justify-center lg:order-2 xs:order-1      items-center">
                        <div className=" flex md:flex-row xs:flex-col bg-white justify-center rounded-b-3xl w-[400px]  items-center gap-4 py-5 px-4     ">
                            <button className="bg-orange-500 py-2 px-3 md:w-[50%] xs:w-[80%] rounded-full text-white">Our Services</button>
                            <button className="bg-white border hover:bg-orange-500  hover:text-white border-orange-500 py-2 px-3 xs:w-[80%] md:w-[50%] rounded-full text-orange-500">Contact Us</button>
                        </div>
                        <span className='xs:hidden lg:block text-7xl text-white absolute top-[-20px] left-[-55px] fas fa-chevron-right -rotate-45'><WiMoonWaxingCrescent4 />
                        </span>
                        <span className=' xs:hidden lg:block  text-7xl font-extrabold text-white absolute top-[-20px] right-[-55px] fas fa-chevron-right rotate-45'><WiMoonWaningCrescent2 />

                        </span>
                    </div>

                    <div className="flex lg:order-3 xs:order-3  lg:w-[40%] p-3 justify-end items-end">

                        <div className="flex items-center text-center gap-2  bg-white/30 backdrop-blur-xl p-3 rounded-2xl  w-[200px] ">
                            <IoStar className="text-orange-500 text-2xl" />
                            <h1 className="font-bold text-md">845k+</h1>
                            <h2 className="text-sm">(4.5 Review)</h2>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Section1
