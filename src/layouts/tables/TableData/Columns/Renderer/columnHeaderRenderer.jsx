/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */

import React from 'react'

import { useMaterialUIController } from 'context'

const columnHeaderRenderer = ({ value }) => {
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	return (
		<strong style={{ color: darkMode ? 'white' : 'black' }}>{value}</strong>
	)
}

export default columnHeaderRenderer
