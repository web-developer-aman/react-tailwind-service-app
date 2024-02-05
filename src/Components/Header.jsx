import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai';

export default function Header(){

    const [toggle, setToggle] = React.useState(false);

    return (
        <div className='bg-[#2699fb] p-4 sticky top-0 z-50'>
            <div className='max-w-[1240px] items-center flex justify-between mx-auto'>
                <div className='text-3xl font-bold'>
                    SoftaWeb
                </div>
                {
                    toggle ? 
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                }

                <ul className='hidden md:flex text-white gap-10'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resource</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <ul className={`w-full h-screen block md:hidden text-white fixed top-[68px] bg-black duration-300
                    ${toggle ? "left-0" : "left-[-100%]"}
                `}>
                    <li className='p-3 hover:bg-slate-900'>Home</li>
                    <li className='p-3 hover:bg-slate-900'>Company</li>
                    <li className='p-3 hover:bg-slate-900'>Resource</li>
                    <li className='p-3 hover:bg-slate-900'>About</li>
                    <li className='p-3 hover:bg-slate-900'>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}