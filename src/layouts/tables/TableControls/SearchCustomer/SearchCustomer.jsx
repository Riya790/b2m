/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import React from 'react'

import { TextField, Modal } from '@mui/material'

import PersonSearchIcon from '@mui/icons-material/PersonSearch'

import MDBox from 'components/MDBox'

const SearchCustomer = () => {
	return (
		<MDBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<PersonSearchIcon sx={{ mr: 1, my: 0.5 }} />
			<TextField
				fullWidth
				autoComplete="off"
				type="search"
				label="Search Customer"
				variant="standard"
			/>
		</MDBox>
	)
}

export default SearchCustomer
