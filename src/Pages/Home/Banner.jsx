import React from "react";
import {ReactTyped } from "react-typed";
import Button from "../../Components/Button";


export default function Banner(){
    return (
        <div className="bg-[#2699fb] py-[30px] mx-auto md:py-[100px] text-center px-2">
            <div className="text-2xl md:text-3xl font-bold">
                Elevate Your Online Presence With
            </div>
            <h1 className="text-[40px] md:text-[60px] font-bold text-white py-2 md:pb-3 md-pt-2" >Innovative Web Solutions</h1>
            <div className="text-3xl md:text-4xl font-bold text-white">
                We Build
                <ReactTyped className="pl-2"
                strings={['WordPress Website', 'Laravel Web App','React App']}
                typeSpeed={100}
                backSpeed={50}
                loop={true}
                />
            </div>
            <Button btnText='Get Started' hoverBgColor='white' hoverTxtColor='black' />
        </div>
    )
}