/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};

export default input;
