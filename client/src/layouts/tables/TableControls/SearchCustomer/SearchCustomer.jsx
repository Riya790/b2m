/* eslint-disable */

import React from 'react'

import { TextField } from '@mui/material'

import PersonSearchIcon from '@mui/icons-material/PersonSearch'

// context api
import { useMaterialUIController } from 'context'

import MDBox from 'components/MDBox'

const SearchCustomer = ({ setCustomerId }) => {
	// hooks
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	return (
		<MDBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<PersonSearchIcon
				sx={{ mr: 1, my: 0.5 }}
				color={darkMode ? 'success' : 'error'}
			/>

			<TextField
				fullWidth
				autoComplete="off"
				onChange={(e) => setCustomerId(e.target.value)}
				type="search"
				label="Search Customer Number"
				variant="standard"
			/>
		</MDBox>
	)
}

export default SearchCustomer
