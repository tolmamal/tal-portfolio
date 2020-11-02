import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif', 'Ubuntu', 'Nunito', 'Roboto', 'Open Sans'].join(','),
    },
    palette: {
        primary: {
          main: '#ce5842'
        },
        secondary: {
            main : '#b39d7c'
        },
        textPrimary: {
            main: '#868e96'
        },

    }
});


export default theme;
