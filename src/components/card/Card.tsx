import React, {ReactNode} from 'react';
import { ArrowDown, ArrowUp, Wrapper } from './CarsStyle';

// icons
import arrowUp from '../../assets/icons/arrow-up.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';

interface CardProps{
    className?: string;
    children: ReactNode;
}

export const Card = ({
                        className,
                        children
                     }: CardProps) => {
    return (
        <Wrapper className={className}>
            <ArrowUp src={arrowUp} alt="" />
            <ArrowDown src={arrowDown} alt="" />

            {children}
        </Wrapper>
    );
};

export default Card;