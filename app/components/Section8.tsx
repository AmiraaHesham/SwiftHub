import React from 'react'

const Section8 = () => {
    return (
        <div className='mt-32  w-[100%] flex justify-center items-center'>
            <div className='bg-gray-300/30 rounded-2xl  flex flex-col justify-center items-center  py-20  lg:w-[90%] xl:w-[75%]  xs:w-[90%]'>
                <div className='text-center justify-center flex flex-col gap-4  '>
                    <h1 className='md:text-5xl lg:text-6xl  xs:text-3xl'>Request a Free Quote
                    </h1>
                    <span className='flex justify-center '>
                        <p className=' text-gray-600/70 xs:text-md md:text-xl xs:w-[350px] sm:w-[550px] '>
                            Get a customized shipping quote tailored to your needs. Fast, transparent, and hassle-free pricing for all logistics solutions.
                        </p></span>
                </div>

                <div className='mt-10  bg-white/50 w-[82%]   rounded-lg'>
                    <form >
                        <div className='flex xs:flex-col lg:flex-row  lg:text-sm md:text-lg p-2 justify-between items-center mb-5'>
                            <div className='flex flex-col p-2 text-gray-500' ><label>Name*</label>
                                <input placeholder='Enter your name' className='p-2 bg-gray-300/30 rounded-lg'></input></div>

                            <div className='flex flex-col p-2 text-gray-500' ><label>Email*</label>
                                <input placeholder='Enter your email' className='p-2 bg-gray-300/30 rounded-lg'></input></div>
                            <div className='flex flex-col p-2 text-gray-500' ><label>Phone Number*</label>
                                <input placeholder='Enter your phone number' className='p-2 bg-gray-300/30  rounded-lg'></input></div>
                            <div>
                                <button className='bg-orange-500 py-2 px-4  text-sm mt-5 text-white rounded-full'>Submit Now</button>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Section8
