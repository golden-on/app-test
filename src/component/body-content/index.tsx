import React from 'react';
import MoreSection from './More-section';
import CallToAction from './buy-section';
import CardSection from './card-section';
import CreonSection from './creon-section';
import Hero from './first-section';
import VisionSection from './vision-section';

interface MainContentProps {
    // Add any props you need here
}

const MainContent: React.FC<MainContentProps> = ({ /* Destructure props here */ }) => {
    return (
        <div>
            <Hero/>
            <CallToAction/>
            <CreonSection/>
            <VisionSection/>
            <CardSection/>
            <MoreSection/>
        </div>
    );
};

export default MainContent;