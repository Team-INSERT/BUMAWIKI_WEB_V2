import config from '@/config'
import httpClient from '@/lib/httpClient'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const useRevalidate = (docsName: string) => {
	const router = useRouter()

	const revalidate = (title = docsName) => {
		httpClient.revalidateUpdate.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-update` })
		httpClient.revalidateVersion.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-version` })
		httpClient.revalidateDocs.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-docs` }).then(() => {
			router.push(`/docs/${title}`)
			window.location.reload()
			toast.success('문서 편집 성공!')
		})
	}

	return { revalidate }
}

export default useRevalidate
