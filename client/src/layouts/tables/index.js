/* eslint-disable */

// @mui material components
import React, { useState, useEffect, forwardRef } from 'react'

import { Grid, Card, Alert, Snackbar } from '@mui/material'
// import { makeStyles } from "@material-ui/core";

import { DataGrid, GridToolbar } from '@mui/x-data-grid'

// context api
import { useMaterialUIController } from 'context'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDSnackbar from 'components/MDSnackbar'
import MDPagination from 'components/MDPagination'

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import Header from 'examples/Header'

import TablePagination from '../../examples/Tables/TablePagination/TablePagination'
import TableAction from './TableAction/TableAction'

// Data
import columns from './TableData/Columns/columns'

// api
import { ReadData } from '../../api/ReadData'

const Tables = () => {
	// hooks
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	// states
	const [rows, setRows] = useState([])
	const [customerId, setCustomerId] = useState(-1)
	const [filteredRows, setFilteredRows] = useState([])
	const [deleteRows, setDeleteRows] = useState()
	const [snackBar, setSnackBar] = useState({})

	// fetching rows from api
	useEffect(() => {
		ReadData().then((data) => {
			setRows(data)
		})
	}, [])

	// filtered rows based on customer id
	const searchCustomer = rows.filter((row) => row.cust_number == customerId)

	return (
		<>
			<br />
			<Header />

			<DashboardNavbar />
			<MDBox pt={6} pb={3}>
				<Grid container spacing={6}>
					<Grid item xs={12}>
						<Card>
							

							<MDBox p={3} height="auto">
							<MDBox
								mx={1}
								mt={-1}
								py={1}
								px={1}
								variant="gradient"
								bgColor="primary"
								borderRadius="md"
								coloredShadow="info"
							>
							
							</MDBox>
							<br/>
								{/* table action buttons & inout field */}
								<TableAction
									rows={rows}
									setRows={setRows}
									setSnackBar={setSnackBar}
									setCustomerId={setCustomerId}
									setFilteredRows={setFilteredRows}
									deleteRows={deleteRows}
									setDeleteRows={setDeleteRows}
								/>
								<br/>
							<MDBox
								mx={1}
								mt={-1}
								py={1}
								px={1}
								variant="gradient"
								bgColor="primary"
								borderRadius="md"
								coloredShadow="info"
							>
							
							</MDBox>
							<br/>
								{/* data-grid table */}
								<DataGrid
									rows={
										searchCustomer.length > 0
											? searchCustomer
											: filteredRows.length > 0
											? filteredRows
											: rows
									}
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
									// disableSelectionOnClick
									onSelectionModelChange={(id) => setDeleteRows(id)}
								/>
							</MDBox>
						</Card>
					</Grid>
				</Grid>
			</MDBox>

			{/* snackbar alert */}
			<MDSnackbar
				setFilteredRows={setFilteredRows}
				snackBar={snackBar}
				setSnackBar={setSnackBar}
			/>

			{/* footer */}
			<Footer />
		</>
	)
}

export default Tables
