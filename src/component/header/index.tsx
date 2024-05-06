import Image from 'next/image';
import React from 'react';
import Button from '../buttons';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className='font-SubTitles flex justify-between w-full fixed p-5 z-50'>
            <Image
                src="/SVGs/Logo.svg"
                alt="CreaonLogo"
                width={140}
                height={39}
                priority
                className='h-fit sm:w-14'
            />
            <menu className='text-fs-18 flex justify-between w-53% leading-10 sm:p-0 sm:hidden sm:text-xs'>
                <p>Creon Pass</p>
                <p className="soon">Token</p>
                <p className="soon">AI Revenue</p>
                <p className="soon">AI Launchpad</p>
                <Button classProps='bg-transparent border-2 border-white w-1/5 rounded-md' text='Connect'/>
            </menu>
        </div>
    );
};

export default Header;