/* eslint-disable */

import axios from 'axios'

export const UpdateData = async (values, deleteRows) => {
	const { payment_terms, currency } = values

	const res = await axios({
		method: 'PUT',
		url: 'http://localhost:5005/hrc_backend/edit',
		data: {
			list: deleteRows,
			cust_payment_terms: payment_terms,
			invoice_currency: currency,
		},
	})

	return res.data
}
