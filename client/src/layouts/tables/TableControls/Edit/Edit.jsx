/* eslint-disable */

import React, { useState } from 'react'

import { Box, Modal, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import EditIcon from '@mui/icons-material/Edit'

import MDButton from 'components/MDButton'
import EditForm from '../../TableForms/EditForm/EditForm'

const Edit = ({ deleteRows, setDeleteRows, setSnackBar }) => {
	//  states
	const [isOpen, setIsOpen] = useState(false)

	// hooks
	const theme = useTheme()
	const width = useMediaQuery(theme.breakpoints.up('sm')) ? 'auto' : '255px'

	// box style
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
				color="primary"
				startIcon={<EditIcon />}
			>
				Edit
			</MDButton>
			<Modal
				open={isOpen}
				onClose={() => setIsOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<EditForm
						setIsOpen={setIsOpen}
						deleteRows={deleteRows}
						setDeleteRows={setDeleteRows}
						setSnackBar={setSnackBar}
					/>
				</Box>
			</Modal>
		</>
	)
}

export default Edit
