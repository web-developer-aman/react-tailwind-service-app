import React, { useState } from 'react';
import ProjectJson from '../../assets/files/projects.json';
import Button from '../../Components/Button';


export default function Projects(){

    const [visible, setVisible] = useState(3);

    const loadMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <div className='max-w-[1240px] mx-auto py-[30px] md:py-[100px] px-2'>
            <h2 className='md:text-[40px] text-3xl font-bold text-center'>Our Successful <span className='bg-[#2699fb] text-white px-3'>Projects</span></h2> 
            <p className='md:w-[600px] mx-auto text-center pt-5'>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique.</p>
            <div className='md:grid grid-cols-3 gap-10 mt-[50px]'>

                {ProjectJson.data.slice(0,visible).map((item, index) => {

                    return (
                    <div key={index} className='shadow-xl group rounded-lg mb-2'>
                        <div className='h-[200px] overflow-hidden ease-in-out duration-[2s] bg-top group-hover:bg-bottom bg-cover' style={{ backgroundImage: `url(${require('../../assets/images/projects/' + item.img)})` }}>
                        </div>
                        <div className='p-5'>
                        <h3 className='text-[20px] text-center font-bold mb-2'>{item.title}</h3>
                        <p>{item.description}</p>
                        </div>
                    </div>
                    );
                })}
                
            </div>
            <div className='text-center'>
                <Button btnText= 'Load More' hoverBgColor='[#2699fb]' hoverTxtColor='white' loadMore= {loadMoreItems}/>
            </div>
            
        </div>
    )
}