import httpClient from '@/lib/httpClient'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'

interface AuthorityApiProps {
	email: string
	authority: string
}

const onAuthority = async ({ email, authority }: AuthorityApiProps) => {
	return (await httpClient.authority.put({ email, authority })).data
}

const useAuthorityMutation = () => {
	return useMutation(onAuthority, {
		onSuccess: () =>
			Swal.fire({
				icon: 'success',
				title: '유저 권한이 변경되었습니다!',
			}),
	})
}

export default useAuthorityMutation
