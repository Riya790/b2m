/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react'

import { Grid, Card, TextField } from '@mui/material'

// context api
import { useMaterialUIController } from 'context'

import MDButton from 'components/MDButton'
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'

import { DeleteData } from '../../../../api/DeleteData'

const DeleteForm = ({ deleteRows, setDeleteRows, setIsOpen }) => {
	// hooks
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	return (
		<Card>
			<MDBox
				mx={2}
				mt={-3}
				py={3}
				px={2}
				variant="gradient"
				bgColor="error"
				borderRadius="lg"
				coloredShadow="info"
			>
				<MDTypography variant="h3" color="black">
					Delete
				</MDTypography>
			</MDBox>

			<MDBox p={3} height="auto">
				<MDTypography variant="subtitle1" color={darkMode ? 'white' : 'black'}>
					Are you sure you want to delete ?
				</MDTypography>

				<Grid container spacing={2} pt={2}>
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<MDButton
							fullWidth
							variant="gradient"
							color="error"
							onClick={() => DeleteData(deleteRows)}
						>
							Delete ?
						</MDButton>
					</Grid>

					<Grid item xs={12} sm={6} md={6} lg={6}>
						<MDButton
							fullWidth
							onClick={() => setIsOpen(false)}
							variant="gradient"
							color="secondary"
						>
							Cancel
						</MDButton>
					</Grid>
				</Grid>
			</MDBox>
		</Card>
	)
}

export default DeleteForm
