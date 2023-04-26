import config from '@/config'
import httpClient from '@/lib/httpClient'

const useRevalidate = (title: string) => {
	const revalidate = (docsName = title) => {
		httpClient.revalidateUpdate.post({ docsName }, { baseURL: `${config.clientUrl}/api/revalidate-update` })
		httpClient.revalidateVersion.post({ docsName }, { baseURL: `${config.clientUrl}/api/revalidate-version` })
		httpClient.revalidateDocs.post({ docsName }, { baseURL: `${config.clientUrl}/api/revalidate-docs` }).then(() => {
			window.location.href = `/docs/${docsName}`
		})
	}

	return { revalidate }
}

export default useRevalidate
