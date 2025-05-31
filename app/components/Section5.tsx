import React from 'react'
import Image from 'next/image'
const Section5 = () => {
    return (
        <div className='mt-32 mx-0'>
            <div className='relative  '>
                <Image src={'/boat3.jpg'} alt='' width={1400} height={100} className='h-[600px] w-[100%]  rounded-2xl' />
                <div className='flex lg:justify-end lg:items-end xs:justify-center xs:items-center'>
                    <div className='absolute top-10 right-10 lg:w-[500px] xs:w-[400px] xs:text-3xl lg:text-4xl text-purple-200'>

                        <p>Revolutionizing supply chains with accuracy, our logistics company provides flawless solutions, enhancing efficiency and dependability to drive business success with assurance.</p>

                    </div>
                </div>
            </div>
            <div className=' w-[100%] flex justify-center items-center'>
                <div className='mt-20 grid lg:grid-cols-4 xs:grid-cols-2 gap-y-10 xs:w-[100%] lg:w-[80%]'>
                    <div className=' flex flex-col text-center'>
                        <span className='lg:text-6xl xs:text-5xl '>10M+</span>
                        <span className='md:text-xl xs:text-md text-gray-700/60'>User</span>

                    </div>
                    <div className=' flex flex-col text-center'>
                        <span className='lg:text-6xl xs:text-5xl '>845k+</span>
                        <span className='md:text-xl xs:text-md text-gray-700/60'>Happy Customer
                        </span>

                    </div>
                    <div className=' flex flex-col text-center'>
                        <span className='lg:text-6xl xs:text-5xl'>100</span>
                        <span className='md:text-xl xs:text-md text-gray-700/60'>Office Worldwide
                        </span>

                    </div>
                    <div className=' flex flex-col text-center'>
                        <span className='lg:text-6xl xs:text-5xl '>600+</span>
                        <span className='md:text-xl xs:text-md text-gray-700/60'>Complete Projects</span>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Section5
