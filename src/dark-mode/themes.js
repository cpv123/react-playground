import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#0000FF'
        }
    },
    typography: {
        useNextVariants: true,
    },
});

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    },
    typography: {
        useNextVariants: true,
    }
});

const themes = {
    light: lightTheme,
    dark: darkTheme,
};

export default themes;
