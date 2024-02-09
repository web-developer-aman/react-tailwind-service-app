import React from 'react';
import BookingImg from '../../assets/images/booking_landingpage.png';
import TasaImg from '../../assets/images/tasa.png';
import PaperproImg from '../../assets/images/paperpro.png';

export default function Projects(){

    return (
        <div className='max-w-[1240px] mx-auto py-[30px] md:py-[100px] px-2'>
            <h2 className='md:text-[40px] text-3xl font-bold text-center'>Our Successful <span className='bg-[#2699fb] text-white px-3'>Projects</span></h2> 
            <p className='md:w-[600px] mx-auto text-center pt-5'>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique.</p>
            <div className='grid grid-cols-3 gap-10 mt-[50px]'>
                <div className='shadow-xl group rounded-lg'>
                    <div className='h-[200px] overflow-hidden ease-in-out duration-[2s] bg-top group-hover:bg-bottom bg-cover' style={{ backgroundImage: `url('${BookingImg}')` }}>
                    </div>
                    <div className='p-5'>
                        <h3 className='text-[20px] text-center font-bold mb-2'>Alias incidunt reprehenderi</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus distinctio libero quasi quisquam</p>
                    </div>
                </div>
                <div className='shadow-xl group rounded-lg'>
                    <div className='h-[200px] overflow-hidden ease-in-out duration-[2s] bg-top group-hover:bg-bottom bg-cover' style={{ backgroundImage: `url('${TasaImg}')` }}>
                    </div>
                    <div className='p-5'>
                        <h3 className='text-[20px] text-center font-bold mb-2'>Alias incidunt reprehenderi</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus distinctio libero quasi quisquam</p>
                    </div>
                </div>
                <div className='shadow-xl group rounded-lg'>
                    <div className='h-[200px] overflow-hidden ease-in-out duration-[2s] bg-top group-hover:bg-bottom bg-cover' style={{ backgroundImage: `url('${PaperproImg}')` }}>
                    </div>
                    <div className='p-5'>
                        <h3 className='text-[20px] text-center font-bold mb-2'>Alias incidunt reprehenderi</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus distinctio libero quasi quisquam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}