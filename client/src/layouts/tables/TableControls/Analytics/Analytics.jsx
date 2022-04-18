/* eslint-disable */

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import AutoGraphIcon from '@mui/icons-material/AutoGraph'

import MDButton from 'components/MDButton'

const Analytics = () => {
	return (
		<MDButton
			fullWidth
			// target="_blank"
			// component={Link}
			// to="/dashboard"
			variant="gradient"
			color="secondary"
			onClick={() => window.open('/dashboard', '_blank')}
			startIcon={<AutoGraphIcon />}
		>
			Analytics
		</MDButton>
	)
}

export default Analytics
