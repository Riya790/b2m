/* eslint-disable */

import axios from 'axios'

// Read All Row
export const ReadData = async () => {
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:5005/hrc_backend/fetch',
	})

	return res.data
}

// Advanced Search
export const AdvancedSearch = async ({
	doc_id,
	cust_number,
	invoice_id,
	business_year,
}) => {
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:5005/hrc_backend/search',
		params: {
			doc_id: doc_id,
			invoice_id: invoice_id,
			business_year: business_year,
			cust_number: cust_number,
		},
	})

	return res.data
}

// Curreny Pie Chart
export const CurrencyChart = async () => {
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:5005/hrc_backend/chart',
	})

	return res.data
}
