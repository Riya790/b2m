/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
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
