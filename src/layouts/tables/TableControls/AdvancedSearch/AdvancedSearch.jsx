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

import PolicyIcon from '@mui/icons-material/Policy'

import MDButton from 'components/MDButton'

const AdvancedSearch = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<MDButton
				fullWidth
				onClick={() => setIsOpen(true)}
				variant="gradient"
				color="warning"
				startIcon={<PolicyIcon />}
			>
				Advance Search
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

export default AdvancedSearch
