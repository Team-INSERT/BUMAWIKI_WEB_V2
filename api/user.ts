import { bumawikiAxios } from '@/lib/axios/customAxios'

export const logoutUser = async () => {
	return await bumawikiAxios.delete('/auth/bsm/logout', {
		data: {
			refresh_token: localStorage.getItem('refresh_token'),
		},
	})
}

export const loginUser = async (authCode: string) => {
	return (
		await bumawikiAxios.post(
			'/auth/oauth/bsm',
			{},
			{
				headers: { authCode },
			}
		)
	).data
}

export const getOtherUser = async (id: number) => {
	return (await bumawikiAxios.get(`/user/id/${id}`)).data
}

export const getRefreshToken = async () => {
	return await bumawikiAxios.put(
		'/auth/refresh/access',
		{
			refresh_token: localStorage.getItem('refresh_token'),
		},
		{}
	)
}

export const getUser = async () => {
	return (
		await bumawikiAxios.get(`/user`, {
			headers: {
				Authorization: localStorage.getItem('access_token'),
			},
		})
	).data
}

export const updateUserAuthority = async (email: string, authority: string) => {
	return await bumawikiAxios.put(
		'/set/authority',
		{
			email,
			authority,
		},
		{
			headers: {
				Authorization: localStorage.getItem('access_token'),
			},
		}
	)
}
