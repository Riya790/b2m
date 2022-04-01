/* eslint-disable */

import axios from 'axios'

export const ReadData = async () => {
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:5005/HRC_Backend/fetch',
	})

	return res.data
}
