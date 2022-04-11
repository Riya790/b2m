/* eslint-disable */

import axios from 'axios'

export const ReadData = async () => {
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:5005/hrc_backend/fetch',
	})

	return res.data
}
