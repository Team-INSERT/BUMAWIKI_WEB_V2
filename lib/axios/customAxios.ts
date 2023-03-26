import { getAccessToken, getUser } from '@/api/user'
import axios from 'axios'
import { Storage } from '../storage/storage'

const bumawikiAxios = axios.create({
	baseURL: 'http://bumawiki.kro.kr/api',
	timeout: 10000,
})

bumawikiAxios.interceptors.request.use(
	async (config) => {
		let isError = false

		try {
			await getUser()
		} catch (err) {
			isError = true
		}

		if ((!!config.headers['Authorization'] && Storage.getItem('refresh_token')) || isError) {
			await getAccessToken()
			const res = await getAccessToken()
			Storage.setItem('access_token', res.accessToken)
			config.headers['Authorization'] = res.accessToken
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
		const res = await getAccessToken()
		Storage.setItem('access_token', res.accessToken)
		return Promise.reject(error)
	}
)
export { bumawikiAxios }
