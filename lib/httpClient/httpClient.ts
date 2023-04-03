import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { requestInterceptors, responseInterceptors } from '@/lib/interceptor'
import { Storage } from '@/lib/storage'

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

	getInQuery(param: string, data: string | number, requestConfig?: AxiosRequestConfig) {
		return this.api.get(`?${param}=${data}`, {
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

	putByTitle(title: string, data: unknown, requestConfig?: AxiosRequestConfig) {
		return this.api.put(`/${title}`, data, {
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

	deleteById(id: number, requestConfig?: AxiosRequestConfig) {
		return this.api.delete(`/${id}`, {
			...HttpClient.clientConfig,
			...requestConfig,
		})
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
	baseURL: 'http://bumawiki.kro.kr/',
	timeout: 10000,
}

// eslint-disable-next-line
export default {
	static: new HttpClient('api/docs', axiosConfig),
	docs: new HttpClient('api/docs/find/title', axiosConfig),
	refreshToken: new HttpClient('api/auth/refresh/access', axiosConfig),
	myuser: new HttpClient('api/user', axiosConfig),
	user: new HttpClient('api/user/id', axiosConfig),
	oauth: new HttpClient('api/auth/oauth/bsm', axiosConfig),
	logout: new HttpClient('api/auth/bsm/logout', axiosConfig),
	create: new HttpClient('api/docs/create', axiosConfig),
	update: new HttpClient('api/docs/update', axiosConfig),
	version: new HttpClient('api/docs/find/:title/version', axiosConfig),
	lastModified: new HttpClient('api/docs/find/modified', axiosConfig),
	search: new HttpClient('api/docs/find/all/title', axiosConfig),
	updateTitle: new HttpClient('api/docs/update/title', axiosConfig),
	delete: new HttpClient('api/docs/delete/:id', axiosConfig),
	authority: new HttpClient('api/set/authority', axiosConfig),
}
