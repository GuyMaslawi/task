import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './InputTextStyle';

interface InputTextProps{
    type?: string;
    label?: string;
    withIcon?: boolean;
    icon?: string;
    name?: string;
    helperText?: string;
    value?: any;
    inputRef?: any;
    onChange?: (event: any) => void;
}

export const InputText = ({
                            type = 'text',
                            label,
                            withIcon,
                            icon,
                            helperText,
                            name,
                            value,
                            onChange
                          }:InputTextProps) => {

    const classes = useStyles();

    const inputProps = {
        classes,
        type,
        label,
        helperText,
        name,
        value,
        onChange
    }

    return (
        <>
            {withIcon && 
                <img src={icon} alt=""/>
            }
            <TextField {...inputProps}/>
        </>
    );
};

export default InputText;