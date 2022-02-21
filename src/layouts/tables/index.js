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
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import { useMaterialUIController } from 'context'

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

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
              <MDBox pt={3} height="auto">
                <Stack
                  direction="row" spacing={2} m={2}>
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    color={!darkMode ? "dark" : "primary"}>
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    backgroundColor="primary">
                    Delete
                  </Button>
                </Stack>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  autoHeight={true}
                  headerHeight={80}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  // paginationMode="client"
                  // showColumnRightBorder
                  components={{
                    Toolbar: !darkMode ? GridToolbar : null,
                    Pagination: TablePagination,
                  }}
                  // sx={{
                  //   //   '& .MuiDataGrid-columnHeaderTitle': {
                  //   //     textOverflow: "clip",
                  //   //     whiteSpace: "break-spaces",
                  //   //     lineHeight: 1
                  //   //   }

                  //   '&css-1qoy8mm-MuiButtonBase-root-MuiMenuItem-root': {
                  //     backgroundColor: 'black'
                  //   }
                  // }}
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
                // noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
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
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
