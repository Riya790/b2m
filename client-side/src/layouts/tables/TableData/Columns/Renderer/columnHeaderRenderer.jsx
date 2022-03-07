/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

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
