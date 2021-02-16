import styled from 'styled-components';
import Logo from '../logo/Logo';

export const Wrapper = styled.div`
    width: 100%;
    height: 7.8rem;
    background: #202020;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
`;

const pos = `
    position: absolute;
    height: 100%;
`;

export const RightRectangle = styled.img`
    @media (min-width: 960px){
        ${pos}
        right: 0;
        width: 11.4rem;
    }
`;

export const LeftRectangle = styled.img`
    @media (min-width: 960px){
        ${pos}
        left: 0;
        width: 24rem;
    }
`;

export const LogoStyle = styled(Logo)`
    ${pos}
    left: .5rem;
    width: 20rem;
    z-index: 1;
    display: flex;
    justify-content: center;

    @media (max-width: 959px){
        width: 12rem;
    }
`;