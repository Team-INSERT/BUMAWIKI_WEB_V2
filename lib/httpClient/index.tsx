import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Storage } from '@/lib/storage'
import { requestInterceptors, responseInterceptors } from '../interceptor'

export interface HttpClientConfig {
	baseURL?: string
	timeout?: number
	headers?: { Token?: string }
}

export class HttpClient {
	private api: AxiosInstance

	private static clientConfig: HttpClientConfig

	constructor(url: string, axiosConfig: HttpClientConfig) {
		this.api = axios.create({
			...axiosConfig,
			baseURL: `${axiosConfig.baseURL}${url}`,
		})
		HttpClient.clientConfig = { headers: { Token: '' } }
		this.setting()
	}

	get(requestConfig?: AxiosRequestConfig) {
		return this.api.get('', { ...HttpClient.clientConfig, ...requestConfig })
	}

	getById(requestConfig?: AxiosRequestConfig) {
		return this.api.get('/:id', {
			...HttpClient.clientConfig,
			...requestConfig,
		})
	}

	post(data: unknown, requestConfig?: AxiosRequestConfig) {
		return this.api.post('', data, {
			...HttpClient.clientConfig,
			...requestConfig,
		})
	}

	put(data: unknown, requestConfig?: AxiosRequestConfig) {
		return this.api.put('', data, {
			...HttpClient.clientConfig,
			...requestConfig,
		})
	}

	delete(requestConfig?: AxiosRequestConfig) {
		return this.api.delete('', {
			...HttpClient.clientConfig,
			...requestConfig,
		})
	}

	self(requestConfig?: AxiosRequestConfig) {
		return this.api.get('/self', {
			...HttpClient.clientConfig,
			...requestConfig,
		})
	}

	token(requestConfig?: AxiosRequestConfig) {
		return this.api.post(
			'/token',
			{},
			{
				...HttpClient.clientConfig,
				...requestConfig,
			}
		)
	}

	private setting() {
		HttpClient.setCommonInterceptors(this.api)
	}

	static setAccessToken() {
		const accessToken = Storage.getItem('access_token')
		HttpClient.clientConfig.headers = {
			...HttpClient.clientConfig.headers,
			Token: accessToken || undefined,
		}
	}

	static removeAccessToken() {
		Storage.setItem('access_token', '')
	}

	private static setCommonInterceptors(instance: AxiosInstance) {
		instance.interceptors.request.use(requestInterceptors as any)
		instance.interceptors.response.use(responseInterceptors)
	}
}

const axiosConfig: HttpClientConfig = {
	baseURL: config.baseURL,
	timeout: 10000,
}

export default {
	oauth: new HttpClient('/api/oauth', axiosConfig),
	member: new HttpClient('/api/member', axiosConfig),
}
