import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme';

export const useStyles = makeStyles((theme: any) => ({
    root:{
        width: '100%',
        '& label': {
            color: '#D4D4D4',
            fontSize: '1.6rem',
            '&.Mui-focused': {
                color: theme.palette.secondary.main,
            },
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.secondary.main,
        },
        '& .MuiInputBase-input': {
            padding: '1rem 0',
            color: '#fff',
            fontSize: '1.6rem',
        },
    }
}));