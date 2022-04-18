/* eslint-disable */

import React, { useState } from 'react'

import { Box, Modal, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import PolicyIcon from '@mui/icons-material/Policy'

import MDButton from 'components/MDButton'

import AdvancedSearchForm from '../../TableForms/AdvancedSearchForm/AdvancedSearchForm'

const AdvancedSearch = ({ rows, setRows, setFilteredRows, setSnackBar }) => {
	// states
	const [isOpen, setIsOpen] = useState(false)

	// hooks
	const theme = useTheme()
	const width = useMediaQuery(theme.breakpoints.up('sm')) ? 'auto' : '255px'

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
				color="secondary"
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
				<Box sx={style}>
					<AdvancedSearchForm
						setIsOpen={setIsOpen}
						rows={rows}
						setRows={setRows}
						setFilteredRows={setFilteredRows}
						setSnackBar={setSnackBar}
					/>
				</Box>
			</Modal>
		</>
	)
}

export default AdvancedSearch
