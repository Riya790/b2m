/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import * as React from 'react'

import { Grid, Typography, TextField, Button, Stack } from '@mui/material'

// material icons
import DeleteIcon from '@mui/icons-material/Delete'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import EditIcon from '@mui/icons-material/Edit'
import PolicyIcon from '@mui/icons-material/Policy'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'

const TableButtons = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={6} sm={6} lg={3}>
				<MDButton
					fullWidth
					variant="gradient"
					color="success"
					startIcon={<PersonAddAlt1Icon />}
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
				>
					Predict
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
				>
					Analytics
				</MDButton>
			</Grid>

			<Grid item xs={12} sm={12} lg={6} mb={2}>
				<MDBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
					<PersonSearchIcon sx={{ color: 'secondary', mr: 1, my: 0.5 }} />
					<TextField
						fullWidth
						autoComplete="off"
						type="search"
						label="Search Customer"
						variant="standard"
					/>
				</MDBox>
			</Grid>
		</Grid>
	)
}

export default TableButtons
