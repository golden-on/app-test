import React from 'react';
import TitleSub from '../../UI/title-sub';

interface HeroProps {
    //...
}

const Hero: React.FC<HeroProps> = ({ /* Destructure props here */ }) => {
    return (
        // eslint-disable-next-line react/no-unescaped-entities
        <section className="">
            <video autoPlay muted loop
                className="absolute"
            >
                <source 
                    src="/videos/main-background-video.mp4"
                    type="video/mp4"
                />
            </video>
            <TitleSub 
                title={<>The world&apos;s first<br/> platform for Tokenizing<br/> AI blockchain projects</>} 
                subtitle={<>Hold the Creon Pass NFT and earn passive income from AI Tools</>}
                divClass="pt-vl pl-40 relative w-89%" 
                h1Class=" font-BigTitles text-fs-52 leading-lh-110 uppercase" 
                pClass=" font-SubTitles linear border-linear"
            />    
        </section>
    );
};

export default Hero;