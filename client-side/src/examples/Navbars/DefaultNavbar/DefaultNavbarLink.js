/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function DefaultNavbarLink({ icon, name, route, light }) {
  return (
    <MDBox
      component={Link}
      to={route}
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer", userSelect: "none" }}
    >
      <Icon
        sx={{
          color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
          verticalAlign: "middle",
        }}
      >
        {icon}
      </Icon>
      <MDTypography
        variant="button"
        fontWeight="regular"
        color={light ? "white" : "dark"}
        textTransform="capitalize"
        sx={{ width: "100%", lineHeight: 0 }}
      >
        &nbsp;{name}
      </MDTypography>
    </MDBox>
  );
}

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default DefaultNavbarLink;
