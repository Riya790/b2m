/* eslint-disable */

import React, { useState } from 'react'

import { Grid, Card, TextField } from '@mui/material'
import {
	LocalizationProvider,
	DesktopDatePicker,
	MobileDatePicker,
} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

import { useFormik } from 'formik'
import * as yup from 'yup'

import MDButton from 'components/MDButton'
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'

// yup validation object
const validationSchema = yup.object({
	baseline_create_date: yup.date().required('Baseline Create Date is required'),
	business_code: yup.string().required('Business Code is required'),
	business_year: yup.string().required('Business Year is required'),
	clear_date: yup.date().required('Clear Date is required'),
	cust_payment_terms: yup.string().required('Baseline Create Date is required'),
	cust_number: yup.string().required('Customer Number is required'),
	doc_create_date: yup.date().required('Document Create Date is required'),
	doc_id: yup.string().required('Document ID is required'),
	doc_type: yup.string().required('Document Type is required'),
	due_date: yup.date().required('Due Date is required'),
	invoice_id: yup.string().required('Invoice ID is required'),
	invoice_currency: yup.string().required('Invoice Currency is required'),
	posting_date: yup.date().required('Posting Date is required'),
	posting_id: yup.string().required('Posting ID is required'),
	total_open_amount: yup.string().required('Total Open Amount is required'),
})

const AddForm = ({ setIsOpen }) => {
	const formik = useFormik({
		initialValues: {
			baseline_create_date: new Date(),
			business_code: '',
			business_year: '',
			clear_date: new Date(),
			cust_payment_terms: '',
			cust_number: '',
			doc_create_date: new Date(),
			doc_id: '',
			doc_type: '',
			due_date: new Date(),
			invoice_id: '',
			invoice_currency: '',
			posting_date: new Date(),
			posting_id: '',
			total_open_amount: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
	})

	const {
		errors,
		touched,
		isSubmitting,
		handleSubmit,
		handleChange,
		values,
		setFieldValue,
		getFieldProps,
	} = formik

	return (
		<Card>
			<MDBox
				mx={2}
				mt={-3}
				py={3}
				px={2}
				variant="gradient"
				bgColor="success"
				borderRadius="lg"
				coloredShadow="info"
			>
				<MDTypography variant="h3" color="black">
					Add
				</MDTypography>
			</MDBox>

			<MDBox p={3} height="auto">
				<form onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={6} sm={6} md={6} lg={4}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DesktopDatePicker
									fullWidth
									value={values.baseline_create_date}
									onChange={(newValue) =>
										setFieldValue('baseline_create_date', newValue)
									}
									type="baseline_create_date"
									label="Baseline Create Date"
									inputFormat="MM/dd/yyyy"
									error={Boolean(errors.baseline_create_date)}
									helperText={
										touched.baseline_create_date && errors.baseline_create_date
									}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="business_code"
								label="Business Code"
								{...getFieldProps('business_code')}
								error={Boolean(errors.business_code)}
								helperText={touched.business_code && errors.business_code}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="business_year"
								label="Business Year"
								{...getFieldProps('business_year')}
								error={Boolean(errors.business_year)}
								helperText={touched.business_year && errors.business_year}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DesktopDatePicker
									fullWidth
									value={values.clear_date}
									onChange={(newValue) => setFieldValue('clear_date', newValue)}
									type="clear_date"
									label="Clear Date"
									inputFormat="MM/dd/yyyy"
									error={Boolean(errors.clear_date)}
									helperText={touched.clear_date && errors.clear_date}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="cust_payment_terms"
								label="Customer Payment Terms"
								{...getFieldProps('cust_payment_terms')}
								error={Boolean(errors.cust_payment_terms)}
								helperText={
									touched.cust_payment_terms && errors.cust_payment_terms
								}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="cust_number"
								label="Customer Number"
								{...getFieldProps('cust_number')}
								error={Boolean(errors.cust_number)}
								helperText={touched.cust_number && errors.cust_number}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DesktopDatePicker
									fullWidth
									value={values.doc_create_date}
									onChange={(newValue) =>
										setFieldValue('doc_create_date', newValue)
									}
									type="doc_create_date"
									label="Document Create Date"
									inputFormat="MM/dd/yyyy"
									error={Boolean(errors.doc_create_date)}
									helperText={touched.doc_create_date && errors.doc_create_date}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="doc_id"
								label="Document ID"
								{...getFieldProps('doc_id')}
								error={Boolean(errors.doc_id)}
								helperText={touched.doc_id && errors.doc_id}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="doc_type"
								label="Document Type"
								{...getFieldProps('doc_type')}
								error={Boolean(errors.doc_type)}
								helperText={touched.doc_type && errors.doc_type}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DesktopDatePicker
									fullWidth
									value={values.due_date}
									onChange={(newValue) => setFieldValue('due_date', newValue)}
									type="due_date"
									label="Due Date"
									inputFormat="MM/dd/yyyy"
									error={Boolean(errors.due_date)}
									helperText={touched.due_date && errors.due_date}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="invoice_id"
								label="Invoice ID"
								{...getFieldProps('invoice_id')}
								error={Boolean(errors.invoice_id)}
								helperText={touched.invoice_id && errors.invoice_id}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="invoice_currency"
								label="Invoice Currency"
								{...getFieldProps('invoice_currency')}
								error={Boolean(errors.invoice_currency)}
								helperText={touched.invoice_currency && errors.invoice_currency}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DesktopDatePicker
									fullWidth
									value={values.posting_date}
									onChange={(newValue) =>
										setFieldValue('posting_date', newValue)
									}
									type="posting_date"
									label="Posting Date"
									inputFormat="MM/dd/yyyy"
									error={Boolean(errors.posting_date)}
									helperText={touched.posting_date && errors.posting_date}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="posting_id"
								label="Posting ID"
								{...getFieldProps('posting_id')}
								error={Boolean(errors.posting_id)}
								helperText={touched.posting_id && errors.posting_id}
							/>
						</Grid>

						<Grid item xs={6} sm={6} md={6} lg={4}>
							<TextField
								fullWidth
								type="total_open_amount"
								label="Total Open Amount"
								{...getFieldProps('total_open_amount')}
								error={Boolean(errors.total_open_amount)}
								helperText={
									touched.total_open_amount && errors.total_open_amount
								}
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
								Add
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

export default AddForm
