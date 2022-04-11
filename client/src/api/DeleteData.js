/* eslint-disable */

import axios from 'axios'

export const DeleteData = async (deleteRows) => {
	const res = await axios({
		method: 'DELETE',
		url: 'http://localhost:5005/hrc_backend/remove',
		data: {
			list: deleteRows,
		},
	})

	return res.data
}
