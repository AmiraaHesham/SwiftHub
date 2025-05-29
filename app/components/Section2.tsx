import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { LuListChecks, LuNotebookPen } from 'react-icons/lu'
import { RiInboxArchiveLine } from 'react-icons/ri'

const Section2 = () => {
    return (

        <div className='mt-32 flex flex-col justify-center items-center'>
            <div className='text-center flex flex-col gap-4  '>
                <h1 className='text-7xl '>Smart Route Optimization</h1>
                <h4 className=' text-gray-600/70 text-xl '>We analyze traffic patterns and use Al-driven mapping to ensure the <br />
                    fastest, most cost-effective delivery routes.</h4>
            </div>



            <div className='flex justify-center items-center mt-12 gap-10 '>
                <div className='border flex flex-col gap-3 px-4 rounded-lg border-gray-400/20 w-[400px] h-[250px] '>
                    <div className='flex justify-between items-baseline'>
                        <span className='text-2xl text-black/80  bg-gray-300/30 p-2 rounded-full'><LuListChecks /></span>
                        <span className=' p-2 rounded-full text-6xl text-gray-400/10 font-extrabold'>01</span>
                    </div>
                    <span className='text-3xl '>Apply Online</span>
                    <span className='text-gray-600/70'>We analyze traffic patterns and use Al-driven mapping to ensure the fastest, most cost- effective delivery routes.</span>
                    <span className='flex items-center text-md gap-2'>Read More <GoArrowRight />

                    </span>
                </div>
                <div className='border flex flex-col gap-3 px-4 rounded-lg border-gray-400/20 w-[400px] h-[250px] '>
                    <div className='flex justify-between items-baseline'>
                        <span className='text-2xl text-black/80  bg-gray-300/30 p-2 rounded-full'><LuNotebookPen /></span>
                        <span className=' p-2 rounded-full text-6xl text-gray-400/10 font-extrabold'>02</span>
                    </div>
                    <span className='text-3xl '>Submit Documents</span>
                    <span className='text-gray-600/70'>We analyze traffic patterns and use Al-driven mapping to ensure the fastest, most cost- effective delivery routes.</span>
                    <span className='flex items-center text-md gap-2'>Read More <GoArrowRight />

                    </span>
                </div>
                <div className='border flex flex-col gap-3 px-4 rounded-lg border-gray-400/20 w-[400px] h-[250px] '>
                    <div className='flex justify-between items-baseline'>
                        <span className='text-2xl text-black/80  bg-gray-300/30 p-2 rounded-full'><RiInboxArchiveLine />
                        </span>
                        <span className=' p-2 rounded-full text-6xl text-gray-400/10 font-extrabold'>03</span>
                    </div>
                    <span className='text-3xl '>Receive Goods</span>
                    <span className='text-gray-600/70'>We analyze traffic patterns and use Al-driven mapping to ensure the fastest, most cost- effective delivery routes.</span>
                    <span className='flex items-center text-md gap-2'>Read More <GoArrowRight />

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Section2
