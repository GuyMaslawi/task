import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 6.7rem;
    background: #0F0F0F;
    box-shadow: 0 .2rem 3rem rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 7.8rem;
    bottom: 0;
    height: calc(100vh - 7.8rem);
    z-index: 2;
`;

export const OpenArrow = styled.div`
    border-radius: 50%;
    background: #515254;
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
    position: relative;
    right: -5.4rem;
    top: 2.4rem;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const UsersTab = styled.div`
    background: rgba(0, 255, 196, 0.1);
    width: 100%;
    height: 6.6rem;
    border-left: .2rem solid #00FFC4;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    top: 10.6rem;
`;

export const UserTabWrap = styled.div`
    border-radius: 50%;
    border: .1rem solid #00FFC4;
    width: 3.1rem;
    height: 3.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoutWrap = styled.div`
    width: 100%;
    height: 6.2rem;
    width: 3.4rem;
    border-top: .1rem solid #353638;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    left: 1.5rem;
    bottom: 1rem;
`;

export const LogoutButton = styled(Button)`
    width: 3.1rem;
    height: 3.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;