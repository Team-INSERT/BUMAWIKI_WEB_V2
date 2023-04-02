import { getAccessToken } from '@/api/user'
import axios from 'axios'
import { Storage } from '../storage/storage'
import tokenExpired from '../token/tokenExpired'

const bumawikiAxios = axios.create({
	baseURL: 'http://bumawiki.kro.kr/api',
	timeout: 10000,
})

bumawikiAxios.interceptors.request.use(
	async (config) => {
		try {
			tokenExpired()
		} catch (err) {
			console.log(err)
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

bumawikiAxios.interceptors.response.use(
	(response) => {
		return response
	},
	async (error) => {
		console.log('aslkncsalknclkan')
		const res = await getAccessToken()
		Storage.setItem('access_token', res.accessToken)
		return Promise.reject(error)
	}
)
export { bumawikiAxios }
