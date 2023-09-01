import React from 'react';
import ArrowDown from '../public/icons/arrow-down.png'; 
import ArrowUp from 'public/icons/arrow-up.svg';
import Image from 'next/image';


const Arrow = ({Up, Down}) => {
    if (Up) {
        return <Image alt="arrowup" src={ArrowUp} />
    } 
    if (Down) {
        return <Image alt="arrowdown" src={ArrowDown} />
    }

    // If neither Up nor Down props are provided, return null or some default content
    return null;
};
    
export default Arrow;