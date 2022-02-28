/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// @mui material components
import React, { useState, useEffect } from 'react'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
// import { makeStyles } from "@material-ui/core";

import { DataGrid, GridToolbar } from '@mui/x-data-grid'

// import { useAxios } from "use-axios-client";

// context api
import { useMaterialUIController } from 'context'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDPagination from 'components/MDPagination'

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'

import TablePagination from '../../examples/Tables/TablePagination/TablePagination'
import TableAction from './TableAction/TableAction'

// Data
import columns from './TableData/Columns/columns'
// import { rows } from "./TableData/Rows/rows";

// api
import { ReadData } from '../../api/ReadData'

const Tables = () => {
	// hooks
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	// states
	const [rows, setRows] = useState([])

	// fetching customers from api
	useEffect(() => {
		ReadData().then((data) => {
			setRows(data.data)
		})
	}, [])

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
								{/* table action buttons & inout field */}
								<TableAction />

								{/* data-grid table */}
								<DataGrid
									rows={rows}
									columns={columns}
									autoHeight={true}
									headerHeight={88}
									pageSize={10}
									rowsPerPageOptions={[10]}
									components={{
										Toolbar: !darkMode ? GridToolbar : null,
										Pagination: TablePagination,
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
	)
}

export default Tables
