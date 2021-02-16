import React from 'react';
import {
    LogoutWrap,
    UserTabWrap,
    UsersTab,
    LogoutButton,
    OpenArrow,
    Wrapper
} from './SideBarStyle';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { useDispatch } from 'react-redux';

// icons
import user from '../../assets/icons/user.svg';
import logoutIcon from '../../assets/icons/logout.svg';

export const SideBar = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <Wrapper>
            <OpenArrow>
                <ArrowForwardIosOutlinedIcon color="secondary" />
            </OpenArrow>
            <UsersTab>
                <UserTabWrap>
                    <img src={user} alt="" />
                </UserTabWrap>
            </UsersTab>
            <LogoutWrap>
                <LogoutButton onClick={logout}>
                    <img src={logoutIcon} alt="" />
                </LogoutButton>
            </LogoutWrap>
        </Wrapper>
    );
};

export default SideBar;