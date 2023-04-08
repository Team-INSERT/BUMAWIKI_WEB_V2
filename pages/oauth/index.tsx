import * as api from '@/api/user'
import httpClient from '@/lib/httpClient'
import { useRouter } from 'next/router'

import React from 'react'
import { useMutation, useQueryClient } from 'react-query'

const OAuth = () => {
	const queryClient = useQueryClient()
	const router = useRouter()

	const onLogin = async () => {
		return (
			await httpClient.oauth.post(null, {
				headers: {
					authCode: router.query.code,
				},
			})
		).data
	}

	const { mutate } = useMutation(onLogin, {
		onSuccess: (data) => {
			localStorage.setItem('access_token', data.accessToken)
			localStorage.setItem('refresh_token', data.refreshToken)
			localStorage.setItem('isLogin', 'true')
			queryClient.invalidateQueries('getUser')
			window.history.go(-2)
		},
		onError: () => window.history.go(-2),
	})

	React.useEffect(() => {
		mutate()
		// eslint-disable-next-line
	}, [])

	return <></>
}

export default OAuth
