import React from 'react';
import { Wrapper, RightRectangle, LeftRectangle, LogoStyle } from './HeaderStyle';

// images
import rightRec from '../../assets/images/header/rectangle-right.svg';
import leftRec from '../../assets/images/header/rectangle-left.svg';
import { useSmallScreen } from '../../theme';

export const Header = () => {
    const isMobile = useSmallScreen();
    
    return (
        <Wrapper>
            {!isMobile && <RightRectangle src={rightRec} alt="" />}
            <LogoStyle />
            {!isMobile && <LeftRectangle src={leftRec} alt="" />}
        </Wrapper>
    );
};

export default Header;