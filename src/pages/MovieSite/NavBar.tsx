import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";





const NavBar=() =>{
    return(
    <div className="h-16 bg-zinc-900 flex items-center">
        <div className="pt-4 pl-4 pb-4">
        <FiAlignJustify size={32} />
        </div>
        <div className="h-10 pl-12">
            <img
            src="https://marketplace.canva.com/EAGALYqSH7g/1/0/1600w/canva-red-and-black-illustrative-wolf-gaming-logo-cSzFMRU1Vrg.jpg"
            alt="Logo"
            className="h-12  object-cover"
            ></img>
        </div>
        <div className="pl-24 w-2/6">
            <input
            type="text"
            placeholder="  Search anime..."
            className="bg-slate-950 min-w-full rounded-md h-8"
            ></input>
        </div>
        <div className="pl-72 flex">
            <button className="transition-all w-7 h-6 font-mono bg-blue-700  rounded-tl-md rounded-bl-md hover:bg-blue-900">EN</button>
            <button className="transition-all w-7 h-6 ml-px font-mono bg-lime-800 rounded-tr-md rounded-br-md hover:bg-lime-600">JP</button>
        </div>
        <div className="ml-80 ">
            <button
             className="bg-purple-800 flex flex-nowrap  items-center py-1 px-9 font-normal rounded-md ml-3 transition-all hover:bg-purple-700"
            >Sign in <FaArrowRightLong />
            </button>
        </div>
    </div>
    )
}
export default NavBar;