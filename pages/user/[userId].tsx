import React from 'react'
import UserType from '@/types/user.type'
import { NextSeo } from 'next-seo'
import httpClient from '@/lib/httpClient'
import UserLayout from '@/layout/UserLayout'
import { GetStaticProps } from 'next'
import useConfig from '@/hooks/useConfig'
import useUser from '@/hooks/useUser'

interface UserPropsType {
	user: UserType
}

const User = ({ user }: UserPropsType) => {
	const { seoConfig } = useConfig({
		title: `부마위키 유저 - ${user.nickName}`,
		description: `부마위키 유저 "${user.nickName}" 페이지입니다.`,
	})
	const { user: myuser } = useUser()

	return (
		<>
			<NextSeo {...seoConfig} />
			<UserLayout user={user} myuser={myuser} />
		</>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

const getApiDocs = async (userId: string) => {
	try {
		return (await httpClient.user.getByTitle(userId)).data
	} catch (err) {
		return false
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = await getApiDocs(params?.userId as string)

	if (!res) return { notFound: true }

	return {
		props: {
			user: res,
		},
	}
}

export default User
