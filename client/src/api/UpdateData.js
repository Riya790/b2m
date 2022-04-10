/* eslint-disable */

import axios from 'axios'

export const UpdateData = async (values, deleteRows) => {
	const { payment_terms, currency } = values

	const res = await axios({
		method: 'PUT',
		url: 'http://localhost:5005/HRC_Backend/edit',
		data: {
			list: deleteRows,
			cust_payment_terms: payment_terms.toUpperCase(),
			invoice_currency: currency.toUpperCase(),
		},
	})

	return res.data
}
