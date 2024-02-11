import React from 'react';
import MissionImg from '../../assets/images/mission.png';

export default function Mission(){

    return (
        <div className="md:grid grid-cols-2 gap-10 md:max-w-[1000px] px-3 mx-auto my-2 md:py-[0px]">
            <div className="">
                <img src={MissionImg} className="md:w-[90%] object-cover" alt=""/>
            </div>
            <div className="md:mt-[120px]">
                <h2 className='text-3xl md:text-[40px] font-bold mb-2 md:mb-5 leading-tight'>Our <span className='bg-[#2699fb] px-3 text-white'>Mission</span></h2>
                <p className='text-[15px]'>At SoftaWeb, our mission is to empower businesses with cutting-edge web solutions that drive growth, engagement, and success.
                We are committed to delivering high-quality, tailored web services that exceed our clients' expectations and elevate their online presence.</p>
            </div>
        </div>
    )
}