/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
// @mui material components
/* eslint-disable prettier/prettier */
import * as React from 'react';

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import { makeStyles } from "@material-ui/core";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// material icons
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EditIcon from '@mui/icons-material/Edit';
import PolicyIcon from '@mui/icons-material/Policy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';


// context api
import { useMaterialUIController } from 'context'

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

import TablePagination from "../../examples/Tables/TablePagination/TablePagination";

// Data
import columns from "./TableData/Columns/columns";
import rows from "./TableData/Rows/rows";

// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const [controller] = useMaterialUIController()
  const { darkMode } = controller
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  // const column = columns.map((col) =>
  //   darkMode ? { ...col, sortable: false } : col,
  // )

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Mallu Table
                </MDTypography>
              </MDBox>

              <MDBox p={3} height="auto">
                <Grid
                  container
                  spacing={3}
                // m={3}
                >

                  <Grid item xs={6} sm={6} lg={3}>
                    <MDButton
                      fullWidth
                      variant="gradient"
                      color="success"
                      startIcon={<PersonAddAlt1Icon />}
                    // gutterBottom
                    >
                      Add
                    </MDButton>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={3}>
                    <MDButton
                      fullWidth
                      variant="gradient"
                      color="secondary"
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </MDButton>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={3}>
                    <MDButton
                      fullWidth
                      variant="gradient"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </MDButton>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={3}>
                    <MDButton
                      fullWidth
                      variant="gradient"
                      color="info"
                      startIcon={<PrecisionManufacturingIcon />}
                    >Predict
                    </MDButton>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={3}>
                    <MDButton
                      fullWidth
                      variant="gradient"
                      color="warning"
                      startIcon={<PolicyIcon />}
                    >
                      Advance Search
                    </MDButton>
                  </Grid>

                  <Grid item xs={6} sm={6} lg={3}>
                    <MDButton
                      fullWidth
                      variant="gradient"
                      color="primary"
                      startIcon={<AutoGraphIcon />}
                    >Analytics
                    </MDButton>
                  </Grid>

                  <Grid item xs={12} sm={12} lg={6} mb={2}>
                    <TextField
                      fullWidth
                      autoComplete="off"
                      type="search"
                      label="Search Customer"
                    />
                  </Grid>

                </Grid>

                <DataGrid
                  rows={rows}
                  columns={columns}
                  autoHeight={true}
                  headerHeight={80}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  components={{
                    Toolbar: !darkMode ? GridToolbar : null,
                    Pagination: TablePagination,
                  }}
                  sx={{
                    '& .MuiDataGrid-columnHeaderTitle': {
                      textOverflow: "clip",
                      whiteSpace: "break-spaces",
                      lineHeight: 1
                    }
                  }}
                  disableColumnMenu={darkMode ? true : false}
                  checkboxSelection
                  disableSelectionOnClick
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
