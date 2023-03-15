import { getRefreshToken } from 'api/user'
import delCookie from 'utils/etc/delCookie'

const tokenExpired = async () => {
	try {
		const res = await getRefreshToken()
		document.cookie = `authorization=${res.data.accessToken};`
	} catch (err) {
		delCookie('authorization')
		delCookie('refresh_token')
	}
}

export default tokenExpired
