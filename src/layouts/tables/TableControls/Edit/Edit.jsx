/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react'

import { Modal } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'

import MDButton from 'components/MDButton'

const Edit = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<MDButton
				fullWidth
				onClick={() => setIsOpen(true)}
				variant="gradient"
				color="secondary"
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
				<h2>Chutiya hai vroo?</h2>
			</Modal>
		</>
	)
}

export default Edit