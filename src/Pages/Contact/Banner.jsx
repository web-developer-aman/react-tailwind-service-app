import React from 'react';
import BannerContents from '../../Components/BannerContents';

export default function Banner(){

    const title = "Contact Us";
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ut iste impedit? Laudantium ab eaque necessitatibus ullam mollitia at minus nisi voluptatem illum. Labore consectetur possimus odio error eum rerum?";
    
    return (
        <BannerContents title={title} description={description}/>
    )
}