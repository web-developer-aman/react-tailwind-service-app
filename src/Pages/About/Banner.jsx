import React from 'react';
import BannerContents from '../../Components/BannerContents';

export default function Banner(){

    const title = "About Us";
    const description = "Welcome to SoftaWeb, where creativity meets technology to craft exceptional digital experiences.SoftaWeb is a Bangladesh-based web agency dedicated to transforming ideas into innovative and effective online solutions.";
    
    return (
        <BannerContents title={title} description={description}/>
    )
}