import React from 'react';
import { Grid } from '@material-ui/core';
import { Card, Logo, InputText } from '../../components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';

// icons
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// style
import {
    LoginButton,
    SubTitle,
    BoxStyle,
    Content
} from './LoginStyle';


interface IFormInputs {
    Email: string;
    Password: string;
}

const schema = yup.object().shape({
    Email: yup.string().required(),
    Password: yup.string().required()
});

export const Login = () => {

    const usersAPI = 'https://reqres.in/api/login';
    const dispatch = useDispatch();

    const { register, control, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: IFormInputs) => {
        await axios.post(usersAPI, {
            email: data.Email,
            password: data.Password
        })
        dispatch({ type: "LOGIN" });
    };

    return (
        <Content>
            <Card>
                <Logo />

                <SubTitle>Sign in</SubTitle>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <BoxStyle mt={4} width={250}>
                        <Grid container alignItems="center">
                            <Grid item xs={1}>
                                <EmailOutlinedIcon color="secondary" />
                            </Grid>
                            <Grid item xs>
                                <Controller control={control}
                                    defaultValue=""
                                    name="Email"
                                    ref={register}
                                    render={({ onChange, value }) =>
                                        <InputText helperText={errors.Email ? "please enter your email" : ""}
                                            label="Email" onChange={onChange} value={value} />
                                    }
                                />
                            </Grid>
                        </Grid>
                    </BoxStyle>

                    <BoxStyle mt={2} width={250}>
                        <Grid container alignItems="center">
                            <Grid item xs={1}>
                                <LockOutlinedIcon color="secondary" />
                            </Grid>
                            <Grid item xs>
                                <Controller control={control}
                                    defaultValue=""
                                    name="Password"
                                    ref={register}
                                    render={({ onChange, value }) =>
                                        <InputText type="password" helperText={errors.Password ? "please enter your password" : ""}
                                            label="Password" onChange={onChange} value={value} />
                                    }
                                />
                            </Grid>
                        </Grid>
                    </BoxStyle>

                    <Grid container justify="center">
                        <LoginButton type="submit">Sign in</LoginButton>
                    </Grid>
                </form>
            </Card>
        </Content>
    );
};

export default Login;
