import Image from 'next/image';
import React from 'react';

interface TitleSubProps {
    title: React.ReactNode;
    imgSrc: string;
    descr: React.ReactNode;
}

const HorizontalCard: React.FC<TitleSubProps> = ({title, descr, imgSrc }) => {
    return (
        <div className=' flex justify-center'>
            <div className=' p-6 bg-horizonCard rounded-l-md'>
                <h3 className='font-BigTitles text-fs-30 leading-lh-35px uppercase'>{title}</h3>
                <p className='pt-4 font-pragraphs text-fs-15'>{descr}</p>
            </div>
            <Image
                src={imgSrc}
                alt="CreaonImg"
                width={370}
                height={200}
                priority
                className='rounded-r-lg'
            />
        </div>
    );
};

export default HorizontalCard;