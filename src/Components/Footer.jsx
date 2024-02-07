import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Footer(){
    
    return (
        <div className='py-[30px] md:py-[60px] bg-[#2699fb] px-3'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-5 gap-10'>
                <div className='col-span-2 pr-10'>
                    <h3 className='text-3xl md:text-[30px] font-bold mb-2 md:mb-5 leading-tight'>SoftaWeb</h3>
                    <p className='text-[15px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus maxime quam assumenda enim dolores esse praesentium molestiae, culpa, ad cupiditate minima, quas facere? Voluptatum quo consectetur sunt tempora et.</p>
                    
                </div>
                <div className='justify-end mt-2 md:mt-0'>
                    <h3 className='text-2xl md:text-[20px] font-bold mb-2 md:mb-5 leading-tight'>Solutions</h3> 
                    <ul>
                        <li>
                            <Link to='/wordpress-website' className='text-[15px] text-white tracking-wider'>WordPress Website</Link>
                        </li>
                        <li>
                            <Link to='/laravel-web-app' className='text-[15px] text-white tracking-wider'>Laravel Web App</Link>
                        </li>
                        <li>
                            <Link to='/react-app' className='text-[15px] text-white tracking-wider'>React App</Link>
                        </li>
                        <li>
                            <Link to='/website-maintenance' className='text-[15px] text-white tracking-wider'>Website Maintenance</Link>
                        </li>
                    </ul> 
                </div> 
                <div className='justify-end mt-2 md:mt-0'>
                    <h3 className='text-2xl md:text-[20px] font-bold mb-2 md:mb-5 leading-tight'>Company</h3> 
                    <ul>
                        <li>
                            <Link to='/' className='text-[15px] text-white tracking-wider'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='text-[15px] text-white tracking-wider'>About</Link>
                        </li>
                        <li>
                            <Link to='/services' className='text-[15px] text-white tracking-wider'>Services</Link>
                        </li>
                        <li>
                        <Link to='/contact-us' className='text-[15px] text-white tracking-wider'>Contact Us</Link>
                        </li>
                    </ul> 
                </div>
                <div className='mt-2 md:mt-0'>
                    <h3 className='text-2xl md:text-[20px] font-bold mb-2 md:mb-5 leading-tight'>Connect With Us</h3> 
                    <div className='flex mt-5 gap-8'>
                        <a href="https://facebook.com" target='blank'>
                            <TiSocialFacebook className='text-3xl border border-white hover:bg-white hover:text-[#2699FB] text-white  rounded-full p-1 duration-200'/>
                        </a>
                        <a href="https://linkdin.com">
                            <TiSocialLinkedin className='text-3xl border border-white hover:bg-white hover:text-[#2699FB] text-white rounded-full p-1 duration-200'/>
                        </a>
                        <a href="https://twitter.com">
                            <TiSocialTwitter className='text-3xl border border-white hover:bg-white hover:text-[#2699FB] text-white  rounded-full p-1 duration-200'/>
                        </a>
                    </div>
                    <div className='flex mt-5'>
                        <BiLogoGmail className='text-[20px] mt-0.5'/><span className='text-white pl-1 font-bold'>Support@softaweb.com</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}