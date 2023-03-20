import * as api from '@/api/user'
import { useRouter } from 'next/router'

import React, { useEffect } from 'react'
import { useMutation } from 'react-query'

const Signup = () => {
	const router = useRouter()

	useEffect(() => {
		console.log(router)
	}, [])

	const { mutate } = useMutation(() => api.loginUser(window.location.search.replace('?code=', '')), {
		onSuccess: (data) => {
			localStorage.setItem('access_token', data.accessToken)
			localStorage.setItem('refresh_token', data.refreshToken)
			localStorage.setItem('isLogin', 'true')
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

export default Signup
