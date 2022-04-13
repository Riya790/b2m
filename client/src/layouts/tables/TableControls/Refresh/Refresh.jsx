/* eslint-disable */

import React from 'react'

import { Icon, IconButton, Button } from '@mui/material'

// icon
import RefreshIcon from '@mui/icons-material/Refresh'

import MDButton from 'components/MDButton'

import { ReadData } from '../../../../api/ReadData'

const Refresh = ({ setRows }) => {
	return (
		<MDButton
			fullWidth
			onClick={() => {
				ReadData().then((data) => {
					setRows(data)
				})
			}}
			variant="gradient"
			color="info"
		>
			<IconButton>
				<RefreshIcon color="white" />
			</IconButton>
		</MDButton>
	)
}

export default Refresh
