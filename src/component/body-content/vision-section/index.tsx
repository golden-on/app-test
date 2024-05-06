import Image from 'next/image';
import React from 'react';
import DropDown from '../../UI/dropdown';

interface Props {
    // Define the props for your component here
}

const VisionSection: React.FC<Props> = ({}) => {
    return (
        <section className='flex pt-40 pl-150px'>
            <div className="flex flex-col w-full">
                <p className="font-BigTitles text-fs-38 w-84% uppercase leading-lh-34px">
                    Our vision is to<br/> support the innovation<br/> of AI blockchain<br/> projects 
                    <span className='linear'> while<br/> prioritizing communities<br/> and democratizing<br/> profits</span>
                </p>
                <Image
                    src="/SVGs/CREON.svg"
                    alt="CreaonImg"
                    width={836}
                    height={502}
                    priority
                    className='h-fit py-5 px-60px ml-10'
                />
            </div>
            <div className="flex flex-col w-66%">
                <DropDown 
                    title={<>Profitability and<br/> Growth</>} imgSrc={'/SVGs/icon.svg'} 
                    descr={`At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. 
                            Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.`} 
                    divClass={'flex justify-center'} h1Class={''} pClass={''}
                />
                <DropDown title={<>Transparent & Fair Decentralized<br/> Earnings</>} imgSrc={'/SVGs/icon1.svg'} descr={''} divClass={'hidden'} h1Class={''} pClass={''}/>
                <DropDown title={<>Launching the<br/> future</>} imgSrc={'/SVGs/icon2.svg'} descr={''} divClass={'hidden'} h1Class={''} pClass={''}/>
                <DropDown title={<>Limitless Possibilities of Al<br/> & Crypto</>} imgSrc={'/SVGs/icon1.svg'} descr={''} divClass={'hidden'} h1Class={''} pClass={''}/>
            </div>
        </section>
    );
};

export default VisionSection;