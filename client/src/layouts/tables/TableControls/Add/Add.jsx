/* eslint-disable */

import React, { useState } from 'react'

import { Box, Modal, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

import MDButton from 'components/MDButton'
import ADDForm from '../../TableForms/AddForm/AddForm'

const Add = ({ setSnackBar }) => {
	// states
	const [isOpen, setIsOpen] = useState(false)

	// hooks
	const theme = useTheme()
	const width = useMediaQuery(theme.breakpoints.up('sm')) ? 'auto' : '355px'

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: width,
		borderRadius: '20px',
		border: '2px solid #000',
		boxShadow: 24,
	}

	return (
		<>
			<MDButton
				fullWidth
				onClick={() => setIsOpen(true)}
				variant="gradient"
				color="success"
				startIcon={<PersonAddAlt1Icon />}
			>
				Add
			</MDButton>
			<Modal
				open={isOpen}
				onClose={() => setIsOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<ADDForm setIsOpen={setIsOpen} setSnackBar={setSnackBar} />
				</Box>
			</Modal>
		</>
	)
}

export default Add
