/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'

import MDButton from 'components/MDButton'

const Delete = () => {
	return (
		<MDButton
			fullWidth
			variant="gradient"
			color="error"
			startIcon={<DeleteIcon />}
		>
			Delete
		</MDButton>
	)
}

export default Delete
