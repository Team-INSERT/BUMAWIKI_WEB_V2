import httpClient from '@/lib/httpClient'
import { NextSeo, NextSeoProps } from 'next-seo'
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

	const seoConfig: NextSeoProps = {
		title: `부마위키 - 로그인`,
		description: `부마위키의 로그인페이지입니다.`,
	}

	return <NextSeo {...seoConfig} />
}

export default OAuth
