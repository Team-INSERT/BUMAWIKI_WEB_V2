import { Storage } from '@/lib/storage'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAccessToken } from '../httpClient/getAccessToken'

export const requestInterceptors = (requestConfig: AxiosRequestConfig) => {
	if (!Storage.getItem('access_token')) getAccessToken()

	if (requestConfig.headers) requestConfig.headers.Authorization = Storage.getItem('access_token')

	const urlParams = requestConfig.url?.split('/:') || []
	if (urlParams.length < 2) return requestConfig

	const paramParsedUrl = urlParams
		?.map((paramKey) => {
			return requestConfig.params[paramKey]
		})
		.join('/')

	urlParams?.forEach((paramKey: string) => {
		delete requestConfig.params[paramKey]
	}, {})

	return {
		...requestConfig,
		url: paramParsedUrl,
	}
}

export const responseInterceptors = (originalResponse: AxiosResponse) => {
	if (originalResponse.status !== 200) getAccessToken()

	return {
		...originalResponse,
		data: originalResponse.data,
	}
}
