import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { LuListChecks, LuNotebookPen } from 'react-icons/lu'
import { RiInboxArchiveLine } from 'react-icons/ri'

const Section2 = () => {
    return (

        <div className='mt-32 flex flex-col justify-center items-center'>
            <div className='text-center justify-center flex flex-col gap-4  '>
                <h1 className='md:text-5xl lg:text-6xl  xs:text-4xl'>Smart Route Optimization</h1>
                <span className='flex justify-center '>
                    <p className=' text-gray-600/70 xs:text-lg md:text-xl xs:w-[400px] sm:w-[600px] '>
                        We analyze traffic patterns and use Al-driven mapping to ensure the
                        fastest, most cost-effective delivery routes.</p></span>
            </div>



            <div className='grid xs:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center items-center mt-12 gap-10 '>
                <div className='border flex flex-col gap-3 px-4 hover:shadow-lg hover:shadow-slate-600 hover:transition-all cursor-default rounded-lg border-gray-400/20 w-[400px] h-[250px] '>
                    <div className='flex justify-between items-baseline'>
                        <span className='text-2xl text-black/80  bg-gray-300/30 p-2 rounded-full'>
                            <LuListChecks /></span>
                        <span className=' p-2 rounded-full text-6xl text-gray-400/10 font-extrabold'>
                            01</span>
                    </div>
                    <span className='text-3xl '>
                        Apply Online</span>
                    <p className='text-gray-600/70'>
                        We analyze traffic patterns and use Al-driven mapping to ensure the fastest, most cost- effective delivery routes.</p>
                    <button className='flex items-center text-md gap-2'>
                        Read More <GoArrowRight /></button>

                </div>
                <div className='border flex flex-col gap-3 px-4 cursor-default hover:shadow-lg hover:shadow-slate-600 hover:transition-all rounded-lg border-gray-400/20 w-[400px] h-[250px] '>
                    <div className='flex justify-between items-baseline'>
                        <span className='text-2xl text-black/80  bg-gray-300/30 p-2 rounded-full'>
                            <LuNotebookPen /></span>
                        <span className=' p-2 rounded-full text-6xl text-gray-400/10 font-extrabold'>
                            02</span>
                    </div>
                    <span className='text-3xl '>
                        Submit Documents</span>
                    <p className='text-gray-600/70'>
                        We analyze traffic patterns and use Al-driven mapping to ensure the fastest, most cost- effective delivery routes.</p>

                    <button className='flex items-center text-md gap-2'>
                        Read More <GoArrowRight /></button>


                </div>
                <div className='border flex flex-col gap-3 px-4 cursor-default hover:shadow-lg hover:shadow-slate-600 hover:transition-all rounded-lg border-gray-400/20 w-[400px] h-[250px] '>
                    <div className='flex justify-between items-baseline'>
                        <span className='text-2xl text-black/80  bg-gray-300/30 p-2 rounded-full'>
                            <RiInboxArchiveLine />
                        </span>
                        <span className=' p-2 rounded-full text-6xl text-gray-400/10 font-extrabold'>
                            03</span>
                    </div>
                    <span className='text-3xl '>
                        Receive Goods</span>
                    <p className='text-gray-600/70'>
                        We analyze traffic patterns and use Al-driven mapping to ensure the fastest, most cost- effective delivery routes.</p>
                    <button className='flex items-center text-md gap-2'>Read More <GoArrowRight /></button>

                </div>
            </div>
        </div>
    )
}

export default Section2
