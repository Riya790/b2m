/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react'

import AutoGraphIcon from '@mui/icons-material/AutoGraph'

import MDButton from 'components/MDButton'

const Analytics = () => {
	return (
		<MDButton
			fullWidth
			variant="gradient"
			color="primary"
			startIcon={<AutoGraphIcon />}
		>
			Analytics
		</MDButton>
	)
}

export default Analytics
