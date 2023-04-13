import httpClient from '@/lib/httpClient'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'

const useDeleteDocsMutation = (docsId: number) => {
	const router = useRouter()

	return useMutation(async () => (await httpClient.deleteDocs.deleteById(docsId, {})).data, {
		onSuccess: () => {
			Swal.fire({
				icon: 'success',
				title: '문서 삭제 완료!',
			})
			router.push('/')
		},
	})
}

export default useDeleteDocsMutation
