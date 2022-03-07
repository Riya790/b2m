/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react'

import { Grid, Card, TextField } from '@mui/material'

import { useFormik } from 'formik'
import * as yup from 'yup'

import MDButton from 'components/MDButton'
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'

// yup validation object
const validationSchema = yup.object({
	currency: yup.string().required('Currency is required'),
	payment_terms: yup.string().required('Payment Terms is required'),
})

const EditForm = ({ setIsOpen }) => {
	const formik = useFormik({
		initialValues: {
			currency: '',
			payment_terms: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
	})

	const { errors, touched, isSubmitting, handleSubmit, values, getFieldProps } =
		formik

	return (
		<Card>
			<MDBox
				mx={2}
				mt={-3}
				py={3}
				px={2}
				variant="gradient"
				bgColor="info"
				borderRadius="lg"
				coloredShadow="info"
			>
				<MDTypography variant="h3" color="black">
					Edit
				</MDTypography>
			</MDBox>

			<MDBox p={3} height="auto">
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<TextField
								fullWidth
								type="currency"
								label="Invoice Currency"
								{...getFieldProps('currency')}
								error={Boolean(errors.currency)}
								helperText={touched.currency && errors.currency}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<TextField
								fullWidth
								type="payment_terms"
								label="Payment Terms"
								{...getFieldProps('payment_terms')}
								error={Boolean(formik.errors.payment_terms)}
								helperText={touched.payment_terms && errors.payment_terms}
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} pt={2}>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<MDButton
								fullWidth
								type="submit"
								variant="gradient"
								color="success"
							>
								Submit
							</MDButton>
						</Grid>

						<Grid item xs={12} sm={6} md={6} lg={6}>
							<MDButton
								fullWidth
								onClick={() => setIsOpen(false)}
								variant="gradient"
								color="secondary"
							>
								Cancel
							</MDButton>
						</Grid>
					</Grid>
				</form>
			</MDBox>
		</Card>
	)
}

export default EditForm
