import { getAccessToken } from '@/api/user'
import axios from 'axios'
import { Storage } from '../storage/storage'

const tokenExpired = async () => {
	try {
		const res = (
			await axios.put(
				'/auth/refresh/access',
				{
					refresh_token: Storage.getItem('refresh_token'),
				},
				{}
			)
		).data
		Storage.setItem('access_token', res.accessToken)
	} catch (err) {
		console.log(err)
	}
}

export default tokenExpired
