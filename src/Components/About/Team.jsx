import React from 'react';
import Member1 from '../../assets/images/team/member1.jpg';
import Member2 from '../../assets/images/team/member2.jpg';
import Member3 from '../../assets/images/team/member3.jpg';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

export default function Team(){

    return (
        <div className='bg-[#2699FB]'>
            <div className='md:max-w-[1100px] md:mx-auto py-[30px] md:py-[50px] mx-3'>
                <h2 className='text-3xl md:text-[40px] font-bold mb-2 md:mb-5 text-center leading-tight'>Our Expert <span className='bg-white px-3 text-[#2699fb]'>Team</span></h2>
                <p className='text-white md:max-w-[700px] text-[15px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus maxime quam assumenda enim dolores esse praesentium molestiae, culpa, ad cupiditate minima, quas facere? </p>
                <div className="md:grid grid-cols-3 md:mt-[50px] pt-[20px] gap-12">
                    <div className='bg-white rounded-lg shadow-xl mb-2'>
                        <img className='rounded-t-lg' src={Member1} alt="" />
                        <div className='p-6 pt-2 text-center'>
                            <h3 className='text-xl font-semibold text-slate-600'>Lisa Mokovic</h3>
                            <h4 className=' text-slate-500'>(Creative Director)</h4>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur. maxime quam assumenda </p>
                            <ul className='text-left list-disc list-inside mt-3'>
                                <li>Graphic Design</li>
                                <li>Branding</li>
                                <li>User Interface (UI) Design</li>
                            </ul>
                            <div className='flex gap-5 justify-center mt-5'>
                                <TiSocialFacebook className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                                <TiSocialLinkedin className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                                <TiSocialTwitter className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-xl mb-2'>
                        <img className='rounded-t-lg' src={Member2} alt="" />
                        <div className='p-6 pt-2 text-center'>
                            <h3 className='text-xl font-semibold text-slate-600'>Alex Rodriguez</h3>
                            <h4 className=' text-slate-500'>(Lead Developer)</h4>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur. maxime quam assumenda </p>
                            <ul className='text-left list-disc list-inside mt-3'>
                                <li>Full-Stack Development</li>
                                <li>E-commerce Solutions</li>
                                <li>Responsive Web Design</li>
                            </ul>
                            <div className='flex gap-5 justify-center mt-5'>
                                <TiSocialFacebook className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                                <TiSocialLinkedin className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                                <TiSocialTwitter className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-xl mb-2'>
                        <img className='rounded-t-lg' src={Member3} alt="" />
                        <div className='p-6 pt-2 text-center'>
                            <h3 className='text-xl font-semibold text-slate-600'>Emily Chen</h3>
                            <h4 className=' text-slate-500'>(Digital Marketing Strategist)</h4>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur. maxime quam assumenda </p>
                            <ul className='text-left list-disc list-inside mt-3'>
                                <li>SEO Optimization</li>
                                <li>Social Media Management</li>
                                <li>Content Marketing</li>
                            </ul>
                            <div className='flex gap-5 justify-center mt-5'>
                                <TiSocialFacebook className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                                <TiSocialLinkedin className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                                <TiSocialTwitter className='text-3xl text-[#2699fb] hover:text-black duration-200'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}