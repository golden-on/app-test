import React from 'react';

interface TitleSubProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    divClass: string;
    h1Class: string;
    pClass: string;
}

const TitleSub: React.FC<TitleSubProps> = ({ divClass, h1Class, pClass, title, subtitle }) => {
    return (
        <div className={divClass}>
            <h1 className={h1Class}>{title}</h1>
            <p className={pClass}>{subtitle}</p>
        </div>
    );
};

export default TitleSub;