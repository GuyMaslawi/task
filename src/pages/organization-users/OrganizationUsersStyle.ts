import { IconButton, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { Card, InputText } from '../../components';

export const useStyles = makeStyles({
    root:{
        margin: 0,
        position: 'relative',
        '& .MuiDialog-paperScrollPaper': {
            '@media (max-width: 959px)': {
                margin: 0,
            }
        },
        '& h2': {
            textAlign: 'center',
            color: '#00FFC4',
            fontSize: '2.4rem'
        },
        '& button': {
            margin: '2rem 0',
            fontSize: '1.4rem',
            width: '100%'
        },
        '& .MuiDialogContent-root': {
            background: '#202020',
            padding: '4rem 4rem 0',
            width: '50rem',
            maxWidth: '90vw',
        },
    },
    closeButton: {
        cursor: 'pointer',
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        color: '#fff',
        margin: '0 !important',
        padding: '0',
        width: '3rem !important',
        height: '3rem',
        '& .MuiSvgIcon-root': {
            fontSize: '2rem',
        },
    },
});

export const InputTextStyles = makeStyles({
    root:{
        marginTop: '2rem'
    }
});

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 7.7rem;
   padding: 0 10rem;
`;

export const MainTitle = styled.h1`
    color: #fff;
    margin: 3.5rem 0 6.9rem;
    text-align: center;
    font-size: 2.8rem;
`;

export const SearchUser = styled(Card)`
    width: 25rem;
    height: 3.4rem;
    padding: 0 1rem;
    position: absolute;
    top: 11rem;
    right: 1rem;
    min-height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #B1B1B1;
    z-index: 2;

    @media (max-width: 959px){
        position: fixed;
        top: 2rem;
        right: 1rem;
        border-bottom: 1px solid #B1B1B1;
        height: 3rem;
    }

    .MuiSvgIcon-root{
        font-size: 2.5rem;

        @media (max-width: 959px){
            fill: #fff;
        }
    }

    input{
        background: transparent;
        border: 0;
        color: #B1B1B1;
        padding: 0 1rem;

        &:focus{
            outline: none;
        }

        @media (max-width: 959px){
            color: #fff;
        }
    }
`;

export const AddUserButton = styled(Card)`
    width: 6rem;
    height: 6rem;
    min-height: auto;
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    cursor: pointer;

    button{
        background: transparent;
        border: 0;
    }

    .MuiSvgIcon-root{
        font-size: 3.5rem;
    }
`;