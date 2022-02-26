/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'

import { Modal } from '@mui/material'

import AutoGraphIcon from '@mui/icons-material/AutoGraph'

import MDButton from 'components/MDButton'

const Analytics = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<MDButton
				fullWidth
				onClick={() => setIsOpen(true)}
				variant="gradient"
				color="primary"
				startIcon={<AutoGraphIcon />}
			>
				Analytics
			</MDButton>
			<Modal
				open={isOpen}
				onClose={() => setIsOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<h2>Chutiya hai vroo?</h2>
			</Modal>
		</>
	)
}

export default Analytics
