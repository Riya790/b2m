/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import React from 'react'

import EditIcon from '@mui/icons-material/Edit'

import MDButton from 'components/MDButton'

const Edit = () => {
	return (
		<MDButton
			fullWidth
			variant="gradient"
			color="secondary"
			startIcon={<EditIcon />}
		>
			Edit
		</MDButton>
	)
}

export default Edit
