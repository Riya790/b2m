/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default icon;
