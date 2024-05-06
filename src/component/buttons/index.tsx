import React from 'react';

interface ButtonProps {
    text: string;
    classProps: string;
}

const Button: React.FC<ButtonProps> = ({text, classProps }) => {
    return (
        <button className={classProps}>
            {text}
        </button>
    );
};

export default Button;