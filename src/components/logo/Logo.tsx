import React from 'react';
import { Holder, Cloud, LineImg, MainTitle } from './LogoStyle';

// images
import cloud from '../../assets/images/cloud.svg';
import line from '../../assets/images/line.svg';

export const Logo = (props: any) => {
    return (
        <Holder className={props.className}>
            <div>
                <Cloud src={cloud} alt="" />
                <MainTitle>UserCloud</MainTitle>
            </div>
            <LineImg src={line} alt="" />
        </Holder>
    );
};

export default Logo;