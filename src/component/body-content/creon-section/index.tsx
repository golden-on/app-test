import React from 'react';
import TitleSub from '../../UI/title-sub';

interface Props {
    // Define the props for your component here
}

const CreonSection: React.FC<Props> = ({}) => {
    return (
        <section className=' pt-40'>
            <TitleSub 
                title={<>Profiting Through</>} 
                subtitle={<>AI Innovation & Decentralization</> }
                divClass="flex flex-col items-center w-full"
                h1Class="font-BigTitles text-fs-52 leading-lh-110 w-74% uppercase" 
                pClass=" font-BigTitles text-fs-38 linear w-84% uppercase text-end"
            />
            <div className='flex items-center'>
                <video 
                // autoPlay muted loop
                    className="w-947px h-485px p-72px"
                    width={947}
                    height={485}
                >
                    <source 
                        src="/videos/creon-logo.mp4"
                        type="video/mp4"
                    />
                </video>
                <div>
                    <p className='font-SubTitles pb-4'>The dynamic community driven<br/> business model of the future.</p>
                    <p className='font-pragraphs'>
                        At Creon, we blend the power of AI tools with the<br/> dynamic crypto and NFT markets, 
                        utilizing an<br/> innovative business model to drive profitability.<br/> This approach empowers our community.
                        as our<br/> NFT and token holders directly benefit from the<br/> growth and prosperity of the Creon network,<br/>
                        creating a win-win scenario for both our<br/> community and for the projects we launch.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CreonSection;