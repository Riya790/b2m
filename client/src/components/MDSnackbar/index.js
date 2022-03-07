/* eslint-disable */

import React from 'react'

import { Alert, Snackbar } from '@mui/material'

const index = ({ setFilteredRows, snackBar, setSnackBar }) => {
	return (
		<Snackbar
			open={snackBar.open}
			onClose={() => {
				setSnackBar((prevState) => ({
					...prevState,
					open: false,
				}))
				setFilteredRows([])
			}}
		>
			<Alert
				sx={{ width: '100%' }}
				onClose={() => {
					setSnackBar((prevState) => ({
						...prevState,
						open: false,
					}))
					setFilteredRows([])
				}}
				severity={snackBar.color}
				elevation={6}
				variant="filled"
			>
				{snackBar.alert_message}
			</Alert>
		</Snackbar>
	)
}

export default index
