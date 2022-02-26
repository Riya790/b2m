/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// Material Dashboard 2 React base styles
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { size, fontWeightRegular } = typography;
const { white } = colors;

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: "#9fc9ff",
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
};

export default stepLabel;
