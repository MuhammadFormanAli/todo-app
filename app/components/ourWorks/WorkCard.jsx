import Image from 'next/image';
import React from 'react';
import WebDevelopmentImage from '@/public/web-design.png'

const WorkCard = () => {
    return (
        <div className='border rounded-lg p-2'>
            <button className=" py-3 px-6 rounded-lg  bg-gradient-to-r from-[#D680FE]  to-[#7A67F0] ">Web Design</button>
            <Image src={WebDevelopmentImage}  alt='img' />
            <p className='text-3xl font-medium p-4 '>The Universe</p>
        </div>
    );
};

export default WorkCard;