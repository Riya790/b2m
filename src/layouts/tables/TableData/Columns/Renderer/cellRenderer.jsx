/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */

import React from 'react'

import { Typography } from '@mui/material'

import { useMaterialUIController } from 'context'

const cellRenderer = ({ value }) => {
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	return (
		<Typography
			style={{
				color: darkMode ? 'white' : 'black',
			}}
			variant="caption"
		>
			{value}
		</Typography>
	)
}

export default cellRenderer
