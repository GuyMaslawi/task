import React from 'react';
import { 
    CardStyle, 
    UserIcon, 
    Role, 
    Part, 
    Email, 
    Name, 
    ContactUser,
    ButtonStyle
} from './UserStyle';
import { Grid } from '@material-ui/core';
import Moment from 'react-moment';

// icons
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import trashIcon from '../../assets/icons/trash.svg';

interface UserProps {
    id?: string;
    icon?: string;
    name?: string;
    role?: string;
    birthDate?: string;
    address?: string;
    email?: string;
    onClick?: (event: any) => void;
}

export const User = ({
                        id = "",
                        icon,
                        name,
                        role,
                        birthDate,
                        address,
                        email,
                        onClick
                    }: UserProps) => { 
                        
    const handleClick = (e: any) => {
        if(onClick){
            onClick(e);
        }
    };

    return (
        <CardStyle>
            <UserIcon src={icon}/>

            <Name>{name}</Name>
            <Role>{role}</Role>

            <Part>
                <div>ID: {id}</div>
                <div>
                    <span>Birthday: </span>
                    <Moment format="DD/MM/YY">
                        {birthDate}
                    </Moment>
                </div>
                <div>Address: {address}</div>
            </Part>

            <ContactUser>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={1}>
                        <EmailOutlinedIcon color="secondary" />
                    </Grid>
                    <Grid item xs>
                        <Email>{email}</Email>
                    </Grid>
                    <Grid item xs={2}>
                        <ButtonStyle onClick={handleClick}>
                            <img src={trashIcon} alt="delete user" />
                        </ButtonStyle>
                    </Grid>
                </Grid>
            </ContactUser>
        </CardStyle>
    );
};

export default User;