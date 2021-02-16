import styled from 'styled-components';

export const Holder = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    div{
        display: flex;
        align-items: center;
    }
`;

export const Cloud = styled.img`
    @media (max-width: 959px){
        width: 4rem;
    }
`;

export const MainTitle = styled.h1`
    font-size: 2.8rem;
    margin: 0;
    color: #fff;

    @media (max-width: 959px){
        font-size: 1.8rem;
    }
`;

export const LineImg = styled.img`
    position: relative;
    top: -1rem;
    left: 1rem;
    width: 18rem;

    @media (max-width: 959px){
        width: 12rem;
        top: -.6em;
    }
`;