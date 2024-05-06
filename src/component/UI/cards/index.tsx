import Image from 'next/image';
import React from 'react';
import TitleSub from '../title-sub';

interface TitleSubProps {
    title: React.ReactNode;
    imgSrc: string;
    descr: React.ReactNode;
    subtitle: React.ReactNode;
    isEdgeCard?: boolean; // to indicate if it's the first or last card
    // divClass: string;
    // h1Class: string;
    // pClass: string;
}

const Card: React.FC<TitleSubProps> = ({title, descr, subtitle, imgSrc, isEdgeCard }) => {
    return (
        <div className='bg-cards rounded-md w-1/4 font-SubTitles coming_soon'>
            <TitleSub 
                title={title} 
                subtitle={subtitle}
                divClass={`flex flex-col pl-5 pt-5 w-full ${isEdgeCard ? 'pb-10' : 'pb-4'}`}// apply padding if it's the first or last card
                h1Class="font-BigTitles text-fs-30 uppercase" 
                pClass={`font-SubTitles text-fs-17 linear`}
            />
            <Image
                src={imgSrc}
                alt="CreaonImg"
                width={350}
                height={200}
                priority
                className='rounded-r-lg'
            />
            <p className='pl-5 pt-4 font-pragraphs text-fs-15'>{descr}</p>
        </div>
    );
};

export default Card;