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
	SearchCustomer,
} from '../TableControls'

const TableAction = ({
	setCustomerId,
	rows,
	setRows,
	setFilteredRows,
	setSnackBar,
}) => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={6} sm={6} lg={3}>
				<Add />
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<Edit />
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<Delete />
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

			<Grid item xs={12} sm={12} lg={6} mb={2}>
				<SearchCustomer setCustomerId={setCustomerId} />
			</Grid>
		</Grid>
	)
}

export default TableAction
