/* eslint-disable */

import * as React from 'react'

import { Grid } from '@mui/material'

import MDBox from 'components/MDBox'

import {
	Add,
	Edit,
	Delete,
	Predict,
	AdvancedSearch,
	Analytics,
	Refresh,
	SearchCustomer,
} from '../TableControls'

const TableAction = ({
	setCustomerId,
	rows,
	setRows,
	setFilteredRows,
	setSnackBar,
	deleteRows,
	setDeleteRows,
}) => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={6} sm={6} lg={3}>
				<Add setSnackBar={setSnackBar} />
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<Edit
					deleteRows={deleteRows}
					setDeleteRows={setDeleteRows}
					setSnackBar={setSnackBar}
				/>
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<Delete
					deleteRows={deleteRows}
					setDeleteRows={setDeleteRows}
					setSnackBar={setSnackBar}
				/>
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<Predict />
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<AdvancedSearch
					rows={rows}
					setRows={setRows}
					setFilteredRows={setFilteredRows}
					setSnackBar={setSnackBar}
				/>
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<Analytics />
			</Grid>

			<Grid item xs={3} sm={1} lg={1}>
				<Refresh setRows={setRows} />
			</Grid>
			
			<Grid item xs={9} sm={11} lg={5} mb={2}>
				<SearchCustomer setCustomerId={setCustomerId} />
			</Grid>

		</Grid>
	)
}

export default TableAction
