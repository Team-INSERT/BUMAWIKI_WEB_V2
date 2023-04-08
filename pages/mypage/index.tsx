import * as api from '@/api/user'
import * as util from '@/utils'

import userState, { initUserState } from '@/context/userState'
import React from 'react'
import { useMutation } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Contributors from '@/types/contributors.type'
import { Storage } from '@/lib/storage/storage'
import { NextSeo, NextSeoProps } from 'next-seo'
import MyPageLayout from '@/layout/MyPageLayout'

const MyPage = () => {
	const { mutate } = useMutation(api.onLogoutUser, {
		onSuccess: () => {
			Storage.delItem('access_token')
			Storage.delItem('refresh_token')
			setUser(initUserState)
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
			<MyPageLayout />
		</>
	)
}

export default MyPage
