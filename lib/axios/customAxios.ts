import { getAccessToken } from '@/api/user'
import axios from 'axios'
import { Storage } from '../storage/storage'

const bumawikiAxios = axios.create({
	baseURL: 'http://bumawiki.kro.kr/api',
	timeout: 10000,
})

bumawikiAxios.interceptors.request.use(
	async (config) => {
		if (config.headers['Authorization'] === null && Storage.getItem('refresh_token')) {
			try {
				await getAccessToken()
			} catch (err) {
				Storage.delItem('access_token')
			}
			const res = await getAccessToken()
			Storage.setItem('access_token', res.accessToken)
			config.headers['Authorization'] = res.accessToken
		}
		return config
	},
	(error) => {
		Storage.delItem('access_token')
		return Promise.reject(error)
	}
)

bumawikiAxios.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		return Promise.reject(error)
	}
)
export { bumawikiAxios }
