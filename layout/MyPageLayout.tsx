import React from 'react'
import * as util from '@/utils'
import * as S from './MyPageLayout.style'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn } from '@/components'
import Contributors from '@/types/contributors.type'
import UserType from '@/types/user.type'
import { UseMutateFunction } from 'react-query'

interface MyPageLayoutPropsType {
	isLogined: boolean
	user: UserType
	mutate: UseMutateFunction<void, unknown, void, unknown>
}

const MyPageLayout = ({ isLogined, user, mutate }: MyPageLayoutPropsType) => {
	return (
		<S.MyPageWrap>
			<Board>
				<S.MyPageTitleWrap>
					<S.MyPageTitleText>{`마이페이지 : ${user.nickName || '비로그인 유저'}`}</S.MyPageTitleText>
				</S.MyPageTitleWrap>
				<Classify>{user.authority}</Classify>
				<S.MyPageLine />
				<S.MyPageInfoWrap>
					<AccodianMenu name={'정보'}>
						<S.MyPageInfoLoadWrap>
							{isLogined && (
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
							)}
						</S.MyPageInfoLoadWrap>
					</AccodianMenu>
					{isLogined && (
						<AccodianMenu name={'기여한 문서'}>
							<S.ContributeWrap>
								<span>이 유저가 기여한 문서의 정보들이다.</span>
								<S.ContributeList>
									{user.contributeDocs.map((docs: Contributors) => (
										<span key={docs.createTime}>
											문서명 :&nbsp;
											<S.ContributeLink href={`/docs/${docs.title}`}>{docs.title}</S.ContributeLink>
											<br />
											수정 날짜 : {util.dateParser(docs.createTime)}
										</span>
									))}
								</S.ContributeList>
							</S.ContributeWrap>
						</AccodianMenu>
					)}
				</S.MyPageInfoWrap>
			</Board>
			<ScrollBtn />
			<Aside />
		</S.MyPageWrap>
	)
}

export default MyPageLayout
