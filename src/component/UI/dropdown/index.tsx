import Image from 'next/image';
import React from 'react';

interface TitleSubProps {
    title: React.ReactNode;
    imgSrc: string;
    descr: string;
    divClass: string;
    h1Class: string;
    pClass: string;
}

const DropDown: React.FC<TitleSubProps> = ({ divClass, h1Class, pClass, title, descr, imgSrc }) => {
    return (
        <div className="flex flex-col w-full pb-10">
            <div className='flex items-center gap-x-5'>
            <Image
                src={imgSrc}
                alt="CreaonImg"
                width={80}
                height={90}
                priority
                className='h-fit'
            />
                <p className='font-SubTitles text-fs-17'>{title}</p>
            </div>
            <div className={divClass}>
                <p className='font-pragraphs text-sm w-67%'>
                    {descr}
                </p>
            </div>
        </div>
    );
};

export default DropDown;