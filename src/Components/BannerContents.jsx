import React from 'react';
import {ReactTyped } from "react-typed";
import Button from "./Button";

export default function BannerContents({btn, title, subTitle, reactType, description}){

    return (
        <div className="bg-[#2699fb] py-[30px] mx-auto md:py-[100px] text-center px-2">
            {
                subTitle?
                <div className="text-2xl md:text-3xl font-bold">
                    {subTitle}
                </div>
                : null
            }
            
            <h1 className="text-[40px] md:text-[60px] font-bold text-white py-2 md:pb-3 md-pt-2" >{title}</h1>
            {
                reactType?
                <div className="text-3xl md:text-4xl font-bold text-white">We Build
                    <ReactTyped className="pl-2" strings={['WordPress Website', 'Laravel Web App','React App']}typeSpeed={100} backSpeed={50} loop={true} />
                </div>
                : null
            }
            {
                description?
                <p className="text-white md:max-w-[800px] mx-auto">{description}
                </p>
                : null
            }
            {
                btn?
                <Button btnText={btn.text} hoverBgColor={btn.hoverBgColor} hoverTxtColor={btn.hoverTxtColor} />
                : null
            }
        
        </div>
    )
}