/* eslint-disable */

import React from 'react'

import { Tooltip, Typography } from '@mui/material'

import { useMaterialUIController } from 'context'

const columnHeaderRenderer = ({ value }) => {
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	return (
		<Tooltip title={value} style={{ fontWeight: 'bold' }} arrow>
			<Typography
				noWrap
				style={{
					color: darkMode ? 'white' : 'black',
					fontWeight: 'bold',
				}}
				variant="caption"
			>
				{value}
			</Typography>
		</Tooltip>
	)
}

export default columnHeaderRenderer
