import * as C from '@/components'
import * as api from '@/api/user'
import * as FC from '@/utils'
import * as S from './style'

import userState, { initUserState } from '@/context/userState'
import React from 'react'
import { useMutation } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Contributors from '@/types/contributors.type'
import { Storage } from '@/lib/storage/storage'
import { NextSeo, NextSeoProps } from 'next-seo'

const MyPage = () => {
	const user = useRecoilValue(userState)
	const setUser = useSetRecoilState(userState)

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
			<C.Header />
			<S.MyPageWrap>
				<C.Board>
					<S.MyPageTitleWrap>
						<S.MyPageTitleText>{`마이페이지 : ${user.nickName || '비로그인 유저'}`}</S.MyPageTitleText>
					</S.MyPageTitleWrap>
					<C.Classify>{user.authority}</C.Classify>
					<S.MyPageLine />
					<S.MyPageInfoWrap>
						<C.AccodianMenu name={'정보'}>
							<S.MyPageInfoLoadWrap>
								{user.id ? (
									<>
										<span>
											이름은 {user.nickName}이며, 부마위키의{' '}
											{user.authority === 'ADMIN' ? '관리자' : user.authority === 'BANNED' ? '읽기전용 사용자' : '사용자'} 중 한 명이다.
										</span>
										<span>
											이 유저의 아이디는 {user.id}이며, 이메일은 {user.email}이다.
										</span>
										<br />
										<div>
											<S.LogoutText onClick={() => mutate()}>로그아웃</S.LogoutText>
										</div>
									</>
								) : (
									<span>이 유저는 로그인을 하지 않은 유저다. 로그인을 하면 문서를 생성하고 편집할 수 있다.</span>
								)}
							</S.MyPageInfoLoadWrap>
						</C.AccodianMenu>
						{user.id ? (
							<C.AccodianMenu name={'기여한 문서'}>
								<S.ContributeWrap>
									<span>이 유저가 기여한 문서의 정보들이다.</span>
									<S.ContributeList>
										{user.contributeDocs.map((docs: Contributors, index: number) => (
											<span key={index}>
												문서명 :&nbsp;
												<S.ContributeLink href={`/docs/${docs.title}`}>{docs.title}</S.ContributeLink>
												<br />
												수정 날짜 : {FC.dateParser(docs.createTime)}
											</span>
										))}
									</S.ContributeList>
								</S.ContributeWrap>
							</C.AccodianMenu>
						) : (
							''
						)}
					</S.MyPageInfoWrap>
				</C.Board>
				<C.Aside />
			</S.MyPageWrap>
			<C.ScrollBtn />
			<C.Footer />
		</>
	)
}

export default MyPage
