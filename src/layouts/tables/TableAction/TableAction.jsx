/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

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

const TableAction = () => {
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
				<AdvancedSearch />
			</Grid>

			<Grid item xs={6} sm={6} lg={3}>
				<Analytics />
			</Grid>

			<Grid item xs={12} sm={12} lg={6} mb={2}>
				<SearchCustomer />
			</Grid>
		</Grid>
	)
}

export default TableAction
