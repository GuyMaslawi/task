import { fontsProps } from './fonts/FontFace';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    ...fontsProps,
    palette: {
        primary: {
            main: '#202020',
        },
        secondary: {
            main: '#00FFC4',
        },
    },
});

export const useSmallScreen = () => {
    return (
        theme.breakpoints.down('sm') ? true : false
    );
};

export const StyleProvider = (props: any) => {
    return (
        <ThemeProvider theme={theme}>
           {props.children}
        </ThemeProvider>
    );
};

export default StyleProvider;