import Image from 'next/image';
import React from 'react';
import BackgroundImage from '@/public/OurTeam/team-member-bg-3.png'
import Medium from '@/public/OurTeam/medium.png'
import Facebook from '@/public/OurTeam/facebook.png'
import Twitter from '@/public/OurTeam/twitter.png'
import LinkedIn from '@/public/OurTeam/linkedIn.png'
import Be from '@/public/OurTeam/be.png'
import Ball from '@/public/OurTeam/ball.png'
import Link from 'next/link';


const TeamMemberCard = ({member}) => {
    const {id,name,designation,image} = member
    return (
        <div className='border rounded-lg max-w-[360px] p-4 flex flex-col gap-4 bg-white'>
            <div className='w-full relative flex items-center justify-center overflow-hidden'>
                <Image className='absolute top-0 p-3 left-[50%] z-0 translate-x-[-50%]' src={BackgroundImage} alt='Team Member Image' />
                <Image className='z-20' src={image} alt='Team Member Image' />
            </div>
           <div className='text-[#0D050F]  font-medium'>
           <h1 className='text-3xl '>{name}</h1>
            <p className='text-lg'>{designation}</p>
           </div>
            <hr/>
            <div className='flex justify-between items-center'>

            <Link className='h-7 w-7 bg-black rounded-full p-1 bg-opacity-15 flex items-center justify-center ' href='#'><Image src={Medium} alt='icon'/></Link>
            <Link className='h-7 w-7 bg-black rounded-full p-1 bg-opacity-15 flex items-center justify-center ' href='#'><Image src={Facebook} alt='icon'/></Link>
            <Link className='h-7 w-7 bg-black rounded-full p-1 bg-opacity-15 flex items-center justify-center ' href='#'><Image src={Twitter} alt='icon'/></Link>
            <Link className='h-7 w-7 bg-black rounded-full p-1 bg-opacity-15 flex items-center justify-center ' href='#'><Image src={LinkedIn} alt='icon'/></Link>
            <Link className='h-7 w-7 bg-black rounded-full p-1 bg-opacity-15 flex items-center justify-center ' href='#'><Image src={Be} alt='icon'/></Link>
            <Link className='h-7 w-7 bg-black rounded-full p-1 bg-opacity-15 flex items-center justify-center ' href='#'><Image src={Ball} alt='icon'/></Link>
            </div>
        </div>
    );
};

export default TeamMemberCard;