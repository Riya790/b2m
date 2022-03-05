/* eslint-disable */

import React, { useState, useEffect } from 'react'

import { TextField, Modal, IconButton } from '@mui/material'

import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

import MDBox from 'components/MDBox'

const SearchCustomer = ({ rows, setFilteredRows }) => {
	// state
	const [customerId, setCustomerId] = useState()

	// useEffect
	// useEffect(() => {
	// 	setFilteredRows(rows)
	// }, [])

	let searchCustomer = rows.filter((row) => row.id == customerId)
	console.log(searchCustomer)

	return (
		<MDBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<PersonSearchIcon sx={{ mr: 1, my: 0.5 }} />

			<TextField
				fullWidth
				autoComplete="off"
				// value={customerId}
				onChange={(e) => setCustomerId(e.target.value)}
				type="search"
				label="Search Customer"
				variant="standard"
			/>

			<IconButton>
				<SearchRoundedIcon
					sx={{ mr: 1, my: 0.5 }}
					onClick={() => {
						setFilteredRows(searchCustomer)
					}}
				/>
			</IconButton>
		</MDBox>
	)
}

export default SearchCustomer
