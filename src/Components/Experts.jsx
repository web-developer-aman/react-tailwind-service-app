import React from 'react';
import delta from '../assets/images/programming.png';

export default function Experts(){
    return (
        <div className="md:grid grid-cols-2 gap-10 md:max-w-[1000px] px-3 mx-auto my-2 py-[30px] md:py-[60px]">
            <div className="">
                <img src={delta} className="md:w-[80%] object-cover" alt=""/>
            </div>
            <div className="md:mt-[100px]">
                <h2 className='text-3xl md:text-[40px] font-bold mb-2 md:mb-5 leading-tight'>Professinal Web Solutions</h2>
                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus maxime quam assumenda enim dolores esse praesentium molestiae, culpa, ad cupiditate minima, quas facere? Voluptatum quo consectetur sunt tempora et.</p>
                
            </div>
            
        </div>
    )
}