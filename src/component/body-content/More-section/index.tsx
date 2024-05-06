import React from 'react';
import HorizontalCard from '../../UI/horizontal-cards';

interface Props {
    // Define the props for your component here
}

const MoreSection: React.FC<Props> = ({}) => {
    return (
        <section className='pt-40 flex justify-center flex-col space-y-4 black-linear relative'>
            <video autoPlay muted loop className='absolute top-0 left-0 min-w-full min-h-full z-[-1]'> {/* Add video tag here */}
                <source src="/videos/roadmap-video.mp4" type="video/mp4" />
            </video>
            <HorizontalCard 
                title={<>AI Prospects, Market Size, and<br/> Development Pace</>} imgSrc='/SVGs/hand.svg' 
                descr={
                <>
                    The Al market is one of the most dynamically growing areas of technology. According to reports, the global Al<br/>
                    market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The<br/>
                    key drivers behind this growth include advancements in machine learning, increasing demand for big data<br/>
                    analytics, and growing adoption of Al technology across various sectors such as healthcare, finance, and<br/>
                    transportation.
                </>}
            />
            <HorizontalCard 
                title={<>MARKET AND TOOLSAI</>} imgSrc='/SVGs/IA.svg' 
                descr={
                <>
                    Al tools refer to the technologies and software that enable computer systems to perform tasks usually requiring<br/>
                    human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language<br/>
                    Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, Al tools are<br/>
                    becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many<br/>
                    others.
                </>}
            />
            <HorizontalCard 
                title={<>MARKET NFT AND CRYPTO,AI,</>} imgSrc='/SVGs/crypto.svg' 
                descr={
                <>
                    Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological<br/>
                    innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible<br/>
                    Tokens (NFTs) can leverage Al to create unique digital artworks or to provide exclusive Al-based services.<br/>
                    Meanwhile, cryptocurrencies can benefit from Al by improving security mechanisms, transaction efficiency, and<br/>
                    service personalization. Such combination brings substantial benefits for both developers and users, paving the<br/>
                    way for unprecedented possibilities.
                </>}
            />
        </section>
    );
};

export default MoreSection;