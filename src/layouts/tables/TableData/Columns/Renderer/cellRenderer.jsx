/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */

import React from 'react'

import { useMaterialUIController } from 'context'

const cellRenderer = ({ value }) => {
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	return <p style={{ color: darkMode ? 'white' : 'black' }}>{value}</p>
}

export default cellRenderer
