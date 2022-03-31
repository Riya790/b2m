/* eslint-disable */

import axios from 'axios'

export const DeleteData = async (deleteRows) => {
	const res = await axios({
		method: 'DELETE',
		url: 'http://localhost:5005/HRC_Backend/remove',
		data: {
			list: deleteRows,
		},
	})

	return res.data
}
