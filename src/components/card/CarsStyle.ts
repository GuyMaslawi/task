import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #202020;
    width: 34.4rem;
    min-height: 34rem;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    position: relative;
    border-radius: 2.5rem 0 2.5rem 0;
`;

export const ArrowUp = styled.img`
    position: absolute;
    top: -.3rem;
    right: -.3rem;
`;

export const ArrowDown = styled.img`
    position: absolute;
    bottom: -.3rem;
    left: -.3rem;
`;