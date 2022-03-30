/* eslint-disable */

import axios from 'axios'

export const DeleteData = async (deleteRows) => {
	const res = await axios.delete('http://localhost:5005/HRC_Backend/remove', {
		data: { list: deleteRows },
	})

	console.log(res.response)
}
