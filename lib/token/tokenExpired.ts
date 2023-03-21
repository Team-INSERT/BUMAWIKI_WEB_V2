import { getAccessToken } from '@/api/user'
import { Storage } from '../storage/storage'

const tokenExpired = async () => {
	const res = await getAccessToken()
	Storage.setItem('access_token', res.accessToken)
}

export default tokenExpired
