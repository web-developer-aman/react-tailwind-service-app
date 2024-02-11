import React from 'react';
import ValuesImg from '../../assets/images/values.png';

export default function Values(){
    return(
        <div className="md:grid grid-cols-2 gap-10 md:max-w-[1000px] px-3 mx-auto my-2 pb-[30px]">
            <div className="md:hidden">
                <img src={ValuesImg} className="md:w-[90%] object-cover" alt=""/>
            </div>
            <div className="md:mt-[120px]">
                <h2 className='text-3xl md:text-[40px] font-bold mb-2 md:mb-5 leading-tight'>Our <span className='bg-[#2699fb] px-3 text-white'>Values</span></h2>
                <p className='text-[15px]'>We believe in transparent communication, honesty, and ethical business practices. Our team thrives on innovative thinking and creative solutions that set our clients apart in the digital landscape. We value collaboration both within our team and with our clients, ensuring a seamless and productive partnership.</p>
            </div>
            <div className="hidden md:block">
                <img src={ValuesImg} className="md:w-[90%] object-cover" alt=""/>
            </div>
        </div>
    )
}