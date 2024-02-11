import React from 'react';

export default function Button({ btnText, hoverBgColor, hoverTxtColor, loadMore }) {
    return (
        <button onClick={loadMore} className={`relative bg-black text-white hover:text-${hoverBgColor ? hoverTxtColor : 'black'} px-[30px] py-4 font-bold mt-[25px] tracking-widest group duration-300 rounded`}>
            <span className={`absolute w-0 group-hover:w-full transition-all ease-out duration-300 right-0 top-0 h-full bg-${hoverBgColor ? hoverBgColor : 'white'} rounded`}></span>
            <span className="relative">{btnText}</span>
        </button>
    );
}

