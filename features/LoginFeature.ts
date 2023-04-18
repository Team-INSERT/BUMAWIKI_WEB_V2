import httpClient from '@/lib/httpClient'
import { Storage } from '@/lib/storage'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'

const onLogin = async (authCode: string) => {
	return (
		await httpClient.oauth.post(
			{},
			{
				headers: { authCode },
			}
		)
	).data
}

const useLoginMutation = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	console.log(router)

	return useMutation(() => onLogin(router.query.code as string), {
		onSuccess: (data) => {
			Storage.setItem('access_token', data.accessToken)
			Storage.setItem('refresh_token', data.refreshToken)
			// window.history.go(-2)
			queryClient.invalidateQueries('getUser')
		},
		onError: (err) => {
			console.log(err)
		},
		// onError: () => window.history.go(-2),
	})
}

export default useLoginMutation
