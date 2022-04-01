/* eslint-disable */

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
