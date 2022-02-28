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
	doc_id: yup.string().required('Document ID is required'),
	cust_number: yup.string().required('Customer Number is required'),
	invoice_id: yup.string().required('Invoice ID is required'),
	business_year: yup.string().required('Business Year is required'),
})

const AdvancedSearchForm = ({ setIsOpen }) => {
	const formik = useFormik({
		initialValues: {
			doc_id: '',
			cust_number: '',
			invoice_id: '',
			business_year: '',
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
				bgColor="warning"
				borderRadius="lg"
				coloredShadow="info"
			>
				<MDTypography variant="h3" color="black">
					Advanced Search
				</MDTypography>
			</MDBox>

			<MDBox p={3} height="auto">
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<TextField
								fullWidth
								type="doc_id"
								label="Document ID"
								{...getFieldProps('doc_id')}
								error={Boolean(errors.doc_id)}
								helperText={touched.doc_id && errors.doc_id}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<TextField
								fullWidth
								type="cust_number"
								label="Customer Number"
								{...getFieldProps('cust_number')}
								error={Boolean(errors.cust_number)}
								helperText={touched.cust_number && errors.cust_number}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<TextField
								fullWidth
								type="invoice_id"
								label="Invoice ID"
								{...getFieldProps('invoice_id')}
								error={Boolean(errors.invoice_id)}
								helperText={touched.invoice_id && errors.invoice_id}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<TextField
								fullWidth
								type="business_year"
								label="Business Year"
								{...getFieldProps('business_year')}
								error={Boolean(errors.business_year)}
								helperText={touched.business_year && errors.business_year}
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} pt={2}>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<MDButton
								fullWidth
								type="submit"
								variant="gradient"
								color="warning"
							>
								Search
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

export default AdvancedSearchForm
