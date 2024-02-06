import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

export default function Header(){

    const [toggle, setToggle] = React.useState(false);

    return (
        <>
        <div className='bg-[#2699fb] p-4 sticky top-0 z-50'>
            <div className='max-w-[1240px] items-center flex justify-between mx-auto'>
                <div className='text-3xl font-bold'>
                    <Link to='/'>SoftaWeb</Link>
                </div>
                {
                    toggle ? 
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                }

                <ul className='hidden md:flex text-white gap-10'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    
                    </li>
                    <li>
                        <Link to="/projects">Successful Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <ul className={`w-full h-screen block md:hidden text-white fixed top-[68px] bg-black duration-300
                    ${toggle ? "left-0" : "left-[-100%]"}
                `}>
                    <li className='p-3 hover:bg-slate-900'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-3 hover:bg-slate-900'>
                        <Link to="/company">Company</Link>
                    </li>
                    <li className='p-3 hover:bg-slate-900'>
                        <Link to="/resource">Resource</Link>
                    </li>
                    <li className='p-3 hover:bg-slate-900'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='p-3 hover:bg-slate-900'>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet />
        </>
    )
}