import React from 'react';
import { SiAltiumdesigner } from "react-icons/si";
import { FaGg } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";

export default function WhyChoose(){
    
    return (
        <div className='bg-[#FAFBFC]'>
            <div className='md:max-w-[1100px] md:mx-auto py-[30px] md:py-[50px] mx-3'>
                <h2 className='text-3xl md:text-[40px] font-bold mb-2 md:mb-5 text-center leading-tight'>Why Choose <span className='bg-[#2699fb] px-3 text-white'>SoftaWeb</span></h2>
                <p className='md:max-w-[700px] text-[15px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus maxime quam assumenda enim dolores esse praesentium molestiae, culpa, ad cupiditate minima, quas facere? </p>
                <div className="md:grid grid-cols-3 md:mt-[50px] pt-[20px] gap-12">
                    <div className='bg-white rounded-lg shadow-sm hover:shadow-xl duration-300 mb-2'>
                        <div className='p-6 text-center'>
                            <SiAltiumdesigner className='text-[40px] mx-auto text-[#2699fb] mb-5'/>
                            <h3 className='text-xl font-semibold text-slate-600'>Exceptional Quality</h3>
                            <p className='mt-3'>We take pride in delivering high-quality, pixel-perfect solutions that make a lasting impact. </p>
                        </div>
                    </div>
                    <div className='bg-[#1E293B] text-white rounded-lg shadow-sm hover:shadow-xl duration-300 mb-2'>
                        <div className='p-6 text-center'>
                            <FaGg className='text-[40px] mx-auto text-[#2699fb] mb-5'/>
                            <h3 className='text-xl font-semibold'>Innovation</h3>
                            <p className='mt-3'>Our team stays ahead of industry trends, adopting the latest technologies to provide innovative and future-proof solutions.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg duration-300 shadow-sm hover:shadow-xl mb-2'>
                        <div className='p-6 text-center'>
                            <GrUserExpert className='text-[40px] mx-auto text-[#2699fb] mb-5'/>
                            <h3 className='text-xl font-semibold text-slate-600'>Customer Satisfaction</h3>
                            <p className='mt-3'>Our success is measured by the success of our clients. Hear what our satisfied clients have to say</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}