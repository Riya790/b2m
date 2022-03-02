/* eslint-disable */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import AutoGraphIcon from '@mui/icons-material/AutoGraph'

import MDButton from 'components/MDButton'

const Analytics = () => {
	return (
		<MDButton
			fullWidth
			component={Link}
			to="/dashboard"
			variant="gradient"
			color="primary"
			startIcon={<AutoGraphIcon />}
		>
			Analytics
		</MDButton>
	)
}

export default Analytics
