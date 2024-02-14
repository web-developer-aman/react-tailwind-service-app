import React from "react";
import BannerContents from "../../Components/BannerContents";


export default function Banner(){
    const btn = {
        text: "Get Started",
        hoverBgColor: "white",
        hoverTxtColor: "black"
    }
    const title = "Innovative Web Solutions";
    const subTitle = "Elevate Your Online Presence With";
    return (
        <BannerContents btn={btn} title={title} subTitle={subTitle} reactType={true}/>
    )
}