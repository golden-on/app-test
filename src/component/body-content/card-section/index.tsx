import React from 'react';
import Card from '../../UI/cards';

interface Props {
    // Define the props for your component here
}

const CardSection: React.FC<Props> = ({}) => {
    return (
        <section className='pt-40 flex justify-center gap-x-6'>
            <Card 
                title={<>TOKEN</>}  
                imgSrc={'/SVGs/hand.svg'} 
                descr={
                    <>
                        Set to debut in the latter half of 2024, the CREON<br/>
                        token serves as the pioneering link between<br/>
                        cutting-edge Al initiatives and blockchain<br/>
                        technology. This innovative token provides NFT<br/>
                        and token holders with unparalleled access to our<br/>
                        Launchpad, Al tools, and exclusive pre-launch<br/>
                        investment prospects.
                    </>
                } 
                subtitle={<>The Gateway token to the world of AI</>}
                isEdgeCard
            />

            <Card 
                title={<>REVENUE</>}  
                imgSrc={'/SVGs/crypto.svg'} 
                descr={
                    <>
                        CREON NFT and token holders are integral<br/>
                        participants in the profit-sharing from our<br/>
                        launched Al-based enterprises. We support the<br/>
                        development of Al tools, ensuring a steady<br/>
                        revenue stream, all while allowing early investors<br/>
                        to enjoy the benefits of their support.
                    </>
                } 
                subtitle={<>Driving income and growth through<br/> decentralization</>}
            />

            <Card 
                title={<>TOKEN</>}  
                imgSrc={'/SVGs/IA.svg'} 
                descr={
                    <>
                        Set to debut in the latter half of 2024, the CREON<br/>
                        token serves as the pioneering link between<br/>
                        cutting-edge Al initiatives and blockchain<br/>
                        technology. This innovative token provides NFT<br/>
                        and token holders with unparalleled access to our<br/>
                        Launchpad, Al tools, and exclusive pre-launch<br/>
                        investment prospects.
                    </>
                } 
                subtitle={<>The Gateway token to the world of AI</>}
                isEdgeCard
            />
        </section>
    );
};

export default CardSection;