/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react'

import { Box, Modal, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import DeleteIcon from '@mui/icons-material/Delete'

import MDButton from 'components/MDButton'
import DeleteForm from '../../TableForms/DeleteForm/DeleteForm'

const Delete = ({ deleteRows, setDeleteRows }) => {
	// states
	const [isOpen, setIsOpen] = useState(false)

	// hooks
	// hooks
	const theme = useTheme()
	const width = useMediaQuery(theme.breakpoints.up('sm')) ? 'auto' : '255px'

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: width,
		//   bgcolor: 'background.paper',
		borderRadius: '20px',
		border: '2px solid #000',
		boxShadow: 24,
		//   p: 4,
	}

	return (
		<>
			<MDButton
				fullWidth
				onClick={() => setIsOpen(true)}
				variant="gradient"
				color="error"
				startIcon={<DeleteIcon />}
			>
				Delete
			</MDButton>
			<Modal
				open={isOpen}
				onClose={() => setIsOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<DeleteForm
						deleteRows={deleteRows}
						setDeleteRows={setDeleteRows}
						setIsOpen={setIsOpen}
					/>
				</Box>
			</Modal>
		</>
	)
}

export default Delete
