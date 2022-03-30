/* eslint-disable */

import axios from 'axios'

export const ReadData = async () => {
	try {
		const data = await axios.get('http://localhost:5005/HRC_Backend/fetch')
		return data
	} catch (error) {
		console.log(error)
	}
}
