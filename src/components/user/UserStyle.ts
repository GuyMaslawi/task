import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Card from '../card/Card';

export const CardStyle = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    padding: 2rem 1.5rem;
    min-height: 37rem;
    width: 27.7rem;

    > div{
        width: 100%;
    }
`;

export const ButtonStyle = styled(Button)`
    &.MuiButton-root{
        min-width: auto;
    }
`;

export const UserIcon = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    border-bottom: .1rem solid #353638;
    padding-bottom: 1.9rem;
`;

export const Name = styled.div`
    font-size: 2rem;
    padding-top: .5rem;
`;

export const Role = styled.div`
    border-bottom: .1rem solid #353638;
    padding-bottom: .5rem;
    font-size: 1.6rem;
    font-weight: 300;
`;

export const Part = styled.div`
    border-bottom: .1rem solid #353638;
    padding: 2.5rem 0 2.1rem;

    > div{
        font-size: 1.4rem;
        font-weight: 300;
        &:not(:last-child){
            margin-bottom: 2rem;
        }
    }
`;

export const ContactUser = styled.div`
    margin-top: 2rem;
    .MuiSvgIcon-root{
        width: 2.7rem;
        height: 2.1rem;
    }

    img{
        cursor: pointer;
    }
`;

export const Email = styled.div`
    text-decoration-line: underline;
    margin-left: .7rem;
    font-size: 1.8rem;
    font-weight: 300;
`;