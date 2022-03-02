/* eslint-disable */

import React from 'react'

import { useField, useFormikContext } from 'formik'

import DatePicker from 'react-datepicker'

export const index = ({ type, label, error }) => {
	return (
		<TextField
			fullWidth
			type="business_code"
			label="Business Code"
			error={Boolean(errors.business_code)}
			helperText={touched.business_code && errors.business_code}
		/>
	)
}
