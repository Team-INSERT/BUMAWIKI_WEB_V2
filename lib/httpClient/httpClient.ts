import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { requestInterceptors, responseInterceptors } from '@/lib/interceptor'
import { Storage } from '@/lib/storage'
import { getAccessToken } from './getAccessToken'
import { QueryClient } from 'react-query'

export interface HttpClientConfig {
	baseURL?: string
	timeout?: number
	headers?: { Authorization?: string }
}

export class HttpClient {
	private api: AxiosInstance

	private static clientConfig: HttpClientConfig

	constructor(url: string, axiosConfig: HttpClientConfig) {
		this.api = axios.create({
			...axiosConfig,
			baseURL: `${axiosConfig.baseURL}${url}`,
		})
		HttpClient.clientConfig = { headers: { Authorization: '' } }
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

	getByTitle(url: string, requestConfig?: AxiosRequestConfig) {
		return this.api.get(`/${url}`, {
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
		const queryClient = new QueryClient()

		this.api.interceptors.response.use(
			(response) => response,
			async (error) => {
				console.log(error)
				Storage.delItem('access_token')
				queryClient.invalidateQueries('getUser')
				await getAccessToken()
				return Promise.reject(error)
			}
		)
	}

	static setAccessToken() {
		const accessToken = Storage.getItem('access_token')
		HttpClient.clientConfig.headers = {
			...HttpClient.clientConfig.headers,
			Authorization: accessToken ?? undefined,
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
	baseURL: 'https://buma.wiki/',
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
	updateType: new HttpClient('api/docs/update/docsType', axiosConfig),
	version: new HttpClient('api/docs/find/', axiosConfig),
	different: new HttpClient('api/docs/find/version', axiosConfig),
	lastModified: new HttpClient('api/docs/find/modified', axiosConfig),
	search: new HttpClient('api/docs/find/all/title', axiosConfig),
	updateTitle: new HttpClient('api/docs/update/title', axiosConfig),
	deleteDocs: new HttpClient('api/docs/delete/', axiosConfig),
	authority: new HttpClient('api/set/authority', axiosConfig),
	getMyLike: new HttpClient('api/thumbs/up/get', axiosConfig),
	getLike: new HttpClient('api/docs/thumbs/up/get', axiosConfig),
	createLike: new HttpClient('api/thumbs/up/create', axiosConfig),
	deleteLike: new HttpClient('api/thumbs/up/delete', axiosConfig),
	isLike: new HttpClient('api/docs/like', axiosConfig),
	revalidateDocs: new HttpClient('api/revalidate-docs', axiosConfig),
	revalidateUpdate: new HttpClient('api/revalidate-update', axiosConfig),
	revalidateVersion: new HttpClient('api/revalidate-version', axiosConfig),
}
