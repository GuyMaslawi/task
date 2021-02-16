import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const SubTitle = styled.h2`
    font-size: 2.2rem;
    margin-top: 3.9rem;
    color: #fff;
`;

export const BoxStyle = styled(Box)`
    .MuiSvgIcon-root{
        font-size: 1.8rem;
        position: relative;
        top: .3rem;
        right: 1rem;
    }
`;

export const LoginButton = styled(Button)`
    &.MuiButtonBase-root{
        height: 3.2rem;
        min-width: 14.7rem;
        color: #202020;
        background-color: #00FFC4;
        border-radius: 2.5rem;
        margin-top: 9.9rem;
        font-size: 1.6rem;

        &:hover{
            background-color: rgb(0, 255, 196,0.5);
        }
    }
`;
