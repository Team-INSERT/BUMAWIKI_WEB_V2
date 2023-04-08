import * as api from '@/api/user'

import httpClient from '@/lib/httpClient'
import useUser from '@/hooks/useUser'
import React from 'react'
import { QueryClient, useMutation } from 'react-query'
import { Storage } from '@/lib/storage/'
import { NextSeo, NextSeoProps } from 'next-seo'
import MyPageLayout from '@/layout/MyPageLayout'

const MyPage = () => {
	const { user, logout } = useUser()
	const queryClient = new QueryClient()

	const onLogout = async () => {
		await httpClient.logout.delete({
			data: {
				refresh_token: Storage.getItem('refresh_token'),
			},
		})
	}

	const { mutate } = useMutation(onLogout, {
		onSuccess: () => {
			queryClient.invalidateQueries('getUser')
			Storage.delItem('access_token')
			Storage.delItem('refresh_token')
			logout()
		},
	})

	const seoConfig: NextSeoProps = {
		title: `부마위키 - 마이페이지`,
		description: `부마위키의 마이페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 마이페이지`,
			description: `부마위키의 마이페이지입니다.`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<MyPageLayout user={user} mutate={mutate} />
		</>
	)
}

export default MyPage
