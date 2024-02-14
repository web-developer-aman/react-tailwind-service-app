import React from 'react';
import BannerContents from '../../Components/BannerContents';

export default function Banner(){

    const title = "Projects";
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet fugiat ducimus ea, quis dolor labore, consequuntur vero, aspernatur similique qui impedit molestiae est nesciunt possimus. Blanditiis dolor tempora nihil.";
    
    return (
        <BannerContents title={title} description={description}/>
    )
}