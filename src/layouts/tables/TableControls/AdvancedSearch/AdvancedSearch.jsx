/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import React from 'react'

import PolicyIcon from '@mui/icons-material/Policy'

import MDButton from 'components/MDButton'

const AdvancedSearch = () => {
	return (
		<MDButton
			fullWidth
			variant="gradient"
			color="warning"
			startIcon={<PolicyIcon />}
		>
			Advance Search
		</MDButton>
	)
}

export default AdvancedSearch
