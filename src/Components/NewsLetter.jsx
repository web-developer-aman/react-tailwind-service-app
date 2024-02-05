import React from 'react';

export default function NewsLetter(){
    return (
        <div className='py-[30px] md:py-[60px] bg-[#2699fb]'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 px-3'>
                <div>
                    <h2 className='text-3xl md:text-[40px] font-bold mb-3'>Suscipit repudiane culpa illo</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat eaque, recusandae magnam nostrum magni. Libero ut adipisci illum, autem eligendi vitae corporis commodi ea aut sed, inventore voluptatibus eaque!</p>
                </div>
                <div className='flex justify-end mt-3'>
                    <div className='mt-3'> 
                        <input className='shadow-l py-3 px-1 md:p-3 rounded-l mb-3' type="text" />
                        <button className='bg-black rounded-r py-3 px-1 md:p-3 text-white tracking-wide'>Subscribe</button>
                        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur.</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}