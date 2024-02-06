import React from 'react';
import Banner from './Banner';
import Experts from './Experts';
import NewsLetter from './NewsLetter';
import Services from '../Services/Services';

export default function Main(){
    return (
        <>
            <Banner />
            <Experts />
            <NewsLetter />
            <Services />
        </>
    )
}