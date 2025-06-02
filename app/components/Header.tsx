import React from 'react'
import { MdDirectionsBoat } from "react-icons/md";
import { VscListFlat } from "react-icons/vsc";
const Header = () => {
    return (
        <div className='md:px-20 md:py-9 xs:p-3'>
            <header className="flex items-center justify-between cursor-default w-[100%] ">
                <div className="flex gap-2  items-center">
                    <MdDirectionsBoat className="text-orange-600 text-3xl" />
                    <h3 className="md:text-xl xs:text-lg font-bold font-sans">SwiftHub </h3>
                </div>

                <nav className=" xs:hidden  md:flex list-none gap-5  items-center border p-2 text-gray-600 rounded-2xl ">
                    <li className="hover:text-black text-black">Home</li>
                    <li className="hover:text-black">About Us</li>
                    <li className="hover:text-black">Services</li>
                    <li className="hover:text-black">Gallery</li>
                    <li className="hover:text-black">Contact</li>
                </nav>
                <button className=" xs:hidden  md:flex  py-2 px-4 bg-black text-white rounded-3xl">Track</button>
                <button className="md:hidden  xs:flex text-3xl font-bold "><VscListFlat />
                </button>
            </header>
        </div>
    )
}

export default Header
