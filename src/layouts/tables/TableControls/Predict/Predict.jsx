/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import React from 'react'

import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'

import MDButton from 'components/MDButton'

const Predict = () => {
	return (
		<MDButton
			fullWidth
			variant="gradient"
			color="info"
			startIcon={<PrecisionManufacturingIcon />}
		>
			Predict
		</MDButton>
	)
}

export default Predict
