import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import ContactImg from '../../assets/images/contact.png';
import Button from '../../Components/Button';

export default function Address(){

    return (
        <div className='md:mx-auto max-w-[1000px] py-[30px] md:py-[100px] mx-3'>
            <div className='md:grid grid-cols-3 gap-20 '>
                <div className='shadow-md hover:shadow-xl rounded-lg p-6 bg-[#F1F5FA] text-center mb-2'>
                    <IoCallOutline className='text-[30px] text-[#2699fb] mx-auto'/>
                    <div className='mt-2'>
                    <h3 className='font-bold text-xl mb-2'>Call the Office</h3>
                        <p>(255) 352-6258</p>
                    </div>
                </div>
                <div className='shadow-md hover:shadow-xl rounded-lg p-6 bg-slate-600 text-center text-white mb-2'>
                    <IoLocationOutline className='text-[30px] text-[#2699fb] mx-auto'/>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xl mb-2'>Office Location</h3>
                        <p>1234 Divi St. #1000, San Francisco, CA 94220</p>
                    </div>
                </div>
                <div className='shadow-md hover:shadow-xl rounded-lg p-6 bg-[#F1F5FA] text-center mb-2'>
                    <MdOutlineMailOutline className='text-[30px] text-[#2699fb] mx-auto'/>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xl mb-2'>Email Us</h3>
                        <p>support@softaweb.com</p>
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-20 mt-[30px] md:mt-[100px]'>
                <img src={ContactImg} alt="contact" className='md:mt-[-50px]' />
                <div className='overflow-hidden'>
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                        <input type="text" name='name' placeholder='Enter your name' className='w-full border border-slate-500 rounded-md py-3 px-2 focus:border-color-[#2699fb] mb-5 focus:shadow-lg'/>
                        <input type="email" name="email" placeholder='Enter your email' className='w-full border border-slate-500 rounded-md py-3 px-2 focus:border-color-[#2699fb] mb-5 focus:shadow-lg'/>
                        <input type="text" name="subject" placeholder='Enter your subject' className='w-full border border-slate-500 rounded-md py-3 px-2 focus:border-color-[#2699fb] mb-5 focus:shadow-lg'/>
                        <textarea name="message" rows="4" className='w-full border border-slate-500 rounded-md py-3 px-2 focus:border-color-[#2699fb] focus:shadow-lg' placeholder='Enter your message'></textarea>
                        <Button btnText= 'Send Inquery' hoverBgColor='[#2699fb]' hoverTxtColor='white'/>
                    </form>
                </div>
            </div>
        </div>
        
    )
}