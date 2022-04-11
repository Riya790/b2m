/* eslint-disable */

import axios from 'axios'

export const CreateData = async ({
	baseline_create_date,
	business_code,
	business_year,
	clear_date,
	cust_payment_terms,
	cust_number,
	doc_create_date,
	doc_id,
	doc_type,
	due_date,
	invoice_id,
	invoice_currency,
	posting_date,
	posting_id,
	total_open_amount,
}) => {
	const res = await axios({
		method: 'POST',
		url: 'http://localhost:5005/hrc_backend/create',
		data: {
			baseline_create_date: baseline_create_date,
			business_code: business_code,
			business_year: business_year,
			clear_date: clear_date,
			cust_payment_terms: cust_payment_terms,
			cust_number: cust_number,
			doc_create_date: doc_create_date,
			doc_id: doc_id,
			document_type: doc_type,
			due_date: due_date,
			invoice_id: invoice_id,
			invoice_currency: invoice_currency,
			posting_date: posting_date,
			posting_id: posting_id,
			total_open_amount: total_open_amount,
		},
	})

	return res.data
}
