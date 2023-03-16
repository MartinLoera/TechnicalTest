import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        }, 
        secondary: {
            main: '#543884', 
        },
        error: {
            main: red.A400
        }
    }, 
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 769,
          lg: 1200,
          xl: 1536,
        },
      },
})