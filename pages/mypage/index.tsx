import useUser from '@/hooks/useUser'
import React from 'react'
import { NextSeo } from 'next-seo'
import MyPageLayout from '@/layout/MyPageLayout'
import { initUserState } from '@/context/userState'
import useConfig from '@/hooks/useConfig'
import { GetServerSideProps } from 'next'
import httpClient from '@/lib/httpClient'
import MyPageLikeType from '@/types/like.type'

interface MyPagePropsType {
	likes: MyPageLikeType[]
}

const MyPage = ({ likes }: MyPagePropsType) => {
	const { user, isLogined, logout } = useUser()
	const { seoConfig } = useConfig({
		title: '부마위키 - 마이페이지',
		description: '부마위키의 마이페이지입니다.',
	})

	return (
		<>
			<NextSeo {...seoConfig} />
			<MyPageLayout likes={likes} isLogined={isLogined} user={user || initUserState} mutate={logout} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const likes = (await httpClient.getLike.get()).data

	return { props: { likes } }
}

export default MyPage
