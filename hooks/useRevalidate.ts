import config from '@/config'
import httpClient from '@/lib/httpClient'

const useRevalidate = (docsName: string) => {
	const revalidate = (title = docsName) => {
		httpClient.revalidateUpdate.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-update` })
		httpClient.revalidateVersion.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-version` })
		httpClient.revalidateDocs.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-docs` }).then(() => {
			window.location.href = `/docs/${title}`
		})
	}

	return { revalidate }
}

export default useRevalidate
