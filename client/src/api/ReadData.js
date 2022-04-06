/* eslint-disable */

import axios from 'axios'

// Read All Row
export const ReadData = async () => {
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:5005/HRC_Backend/fetch',
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
		method: 'POST',
		url: 'http://localhost:5005/HRC_Backend/search',
		data: {
			doc_id: doc_id,
			cust_number: cust_number,
			invoice_id: invoice_id,
			business_year: business_year,
		},
	})

	return res.data
}
