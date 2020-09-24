// @flow
/*
* @author: Ogunleke Abiodun
* @project: Hackccent
* @Year: 2020
* Overrite the main theme
*/

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#b25d3e',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#Ed5f1e',
        // dark: will be calculated from palette.secondary.main,
        //contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    overrides:{
        MuiButton:{
            root:{
                fontFamily: 'Roboto',
            },
            text:{
                textTransform: 'capitalize',
            },
            outlined:{
                textTransform: 'capitalize',
            },
            contained:{
                textTransform: 'capitalize',
            },
        },
    },
  });

  export const Theme = theme