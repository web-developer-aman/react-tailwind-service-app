import React from 'react';
import { RiWordpressFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export default function Services(){
    
    return (
        <div className='max-w-[1240px] mx-auto py-[30px] md:py-[100px] px-2'>
            <h2 className='md:text-[40px] text-3xl font-bold text-center'>Our Web <span className='bg-[#2699fb] text-white px-3'>Solutions</span></h2> 
            <p className='md:w-[600px] mx-auto text-center pt-5'>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique.</p>
            <div className='md:grid grid-cols-3 gap-20 md:pt-20'>
                <div className='hover:shadow-xl shadow-md duration-300 p-3 md:p-10 rounded-md py-10 leading-relaxed'>
                    <RiWordpressFill className='mx-auto text-[50px] mb-3'/>
                    <h3 className='text-2xl md:text-2xl md:text-[20px] font-bold mb-3 text-center'>WordPress Website</h3>
                    <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus maxime quam assumenda enim dolores esse praesentium molestiae, culpa, ad cupiditate minima, quas facere? Voluptatum quo consectetur sunt tempora et.</p>
                </div>
                <div className='hover:shadow-xl bg-slate-800 shadow-md md:scale-[1.2] p-3 md:p-10 rounded-md duration-300 py-10 leading-relaxed text-white'>
                    <FaLaravel className='mx-auto text-[50px] text-[#E8503E] mb-3'/>
                    <h3 className='text-2xl md:text-2xl md:text-[20px] font-bold mb-3 text-center'>Laravel Application</h3>
                    <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus maxime quam assumenda enim dolores esse praesentium molestiae, culpa, ad cupiditate minima, quas facere? Voluptatum quo consectetur sunt tempora et.</p>
                </div>
                <div className='hover:shadow-xl shadow-md p-3 md:p-10 rounded-md duration-300 py-10 leading-relaxed'>
                    <FaReact className='mx-auto text-[50px] text-[#2699fb] mb-3'/>
                    <h3 className='text-2xl md:text-2xl md:text-[20px] font-bold mb-3 text-center'>React Application</h3>
                    <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus maxime quam assumenda enim dolores esse praesentium molestiae, culpa, ad cupiditate minima, quas facere? Voluptatum quo consectetur sunt tempora et.</p>
                </div>

            </div>
        </div>
    )
}