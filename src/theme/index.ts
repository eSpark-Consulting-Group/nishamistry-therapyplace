import { createTheme, useTheme } from "@mui/material/styles";
import { lime, yellow, indigo } from "@mui/material/colors";
// import localFont from "next/font/local";

// const font = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Louis George Cafe Bold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Louis George Cafe Italic.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Louis George Cafe Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Louis George Cafe.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
// });

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          textDecoration: "none",
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        orientation: "horizontal",
        variant: "fullWidth",
      },
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // root: {
        //     fontSize: '1.25rem',
        //     fontWeight: 600,
        // }
      },
    },
    MuiTextField: {
      styleOverrides: {
        // root:{
        //     "& .MuiOutlinedInput-root": {
        //         fontSize: "1.25rem",
        //         fontWeight: 500,
        //     }
        // },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "0.5rem 0",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#23254E",
      light: "#23254E",
      dark: "#23254E",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    // fontFamily: font.style.fontFamily,
    htmlFontSize: 18,
    fontWeightBold: 500,
    fontWeightMedium: 400,
    fontWeightRegular: 300,
    fontWeightLight: 200,
  },
});

export default theme;
