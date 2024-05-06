import React from 'react';
import TitleSub from '../../UI/title-sub';
import Button from '../../buttons';

interface CallToActionProps {
    //...
}

const CallToAction: React.FC<CallToActionProps> = ({}) => {
    return (
        <section className=' flex justify-between items-center pt-80 pr-50px pl-170px'>
            <div className='flex flex-col w-full'>
                <TitleSub 
                    title={<>creon pass nft</>} 
                    subtitle={<>The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</>} 
                    divClass="flex flex-col items-start w-full"
                    h1Class="font-BigTitles text-fs-52 leading-lh-110 w-74% uppercase" 
                    pClass=" font-SubTitles linear w-60%"
                />
                <div>
                <p className='mt-5 leading-lh-50px pl-5 mb-10 font-pragraphs'>
                    Pre-launch investment opportunities for upcoming AI projects<br/>
                    Free and early access to Creon built AI projects<br/>
                    Higher allocation limits on the Creon AI Launchpad<br/>
                    Revenue share distribution from Creon built AI projects<br/>
                </p>
                <Button classProps='bg-transparent border-0 rounded-md linear-button w-53%' text='Buy Creaon Pass'/>
                </div>
            </div>
            <div className='w-69%'>
                <video 
                    autoPlay muted loop
                    // className="absolute"
                >
                    <source 
                        src="/videos/nft-video.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </section>
    );
};

export default CallToAction;