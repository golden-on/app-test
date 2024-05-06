import Image from 'next/image';
import React from 'react';
import SocialIcon from '../UI/social-icon';

const Footer: React.FC = () => {
    return (
        <footer className='flex justify-evenly py-5'>
            <div className='flex items-center space-x-20 w-53%'>
                <p className=' font-pragraphs text-sm'>© Creon 2023. All rights reserved.</p>
                <div className='flex justify-between w-15%'>
                    <SocialIcon imgSrc='/SVGs/Telegram.svg'/>
                    <SocialIcon imgSrc='/SVGs/Twitter.svg'/>
                    <SocialIcon imgSrc='/SVGs/Discord.svg'/>
                </div>
            </div>
            <div className='flex items-center justify-between w-9.4%'>
                <p className=' font-pragraphs text-xs'>Powered by</p>
                <Image
                    src='/SVGs/niftable.svg'
                    alt="CreaonImg"
                    width={75}
                    height={34}
                    priority
                    // className='rounded-r-lg'
                />
            </div>
        </footer>
    );
};

export default Footer;