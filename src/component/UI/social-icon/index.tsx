import Image from 'next/image';
import React from 'react';

interface TitleSubProps {
    imgSrc: string;
}

const SocialIcon: React.FC<TitleSubProps> = ({imgSrc }) => {
    return (
        <Image
            src={imgSrc}
            alt="CreaonImg"
            width={34}
            height={34}
            priority
            // className='h-fit'
        />
    );
};

export default SocialIcon;