import * as S from './style'

import Create from 'assets/create.svg'
import Search from 'assets/search.svg'
import React from 'react'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'
import { headerInitState, subheaderInitState } from '@/state/headerInitState'
import { toast } from 'react-toastify'

const Header = () => {
	const [search, setSearch] = React.useState('')
	const [isHover, setIsHover] = React.useState(false)
	const [delayHandler, setDelayHandeler] = React.useState<null | ReturnType<typeof setTimeout>>(null)
	const { isLogined } = useUser()
	const router = useRouter()

	const navigateSearchResult = () => {
		if (search.length) return router.push(`/search/${search}`)
		return toast.error('검색할 문서명을 입력해주세요!')
	}

	const handleMouseEnter = () => {
		if (isHover) return setIsHover(true)
		setDelayHandeler(setTimeout(() => {}, 400))
	}

	const handleMouseLeave = () => {
		if (!isHover && delayHandler) return clearTimeout(delayHandler)
		setIsHover(false)
	}

	return (
		<S.HeaderContainer>
			<S.HeaderWrap>
				<S.HeaderLink href={'/'}>
					<S.HeaderLogo src="/images/logo.png" width="1000" height="1000" alt="logo" />
				</S.HeaderLink>
				<S.HeaderSectionWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					{headerInitState.map((header, index) => (
						<S.HeaderSection key={index}>
							<S.HeaderSectionLogo src={header.image} alt="" />
							<S.HeaderSectionText>{header.title}</S.HeaderSectionText>
						</S.HeaderSection>
					))}
					{isLogined && (
						<S.HeaderSectionLink href={`/create`}>
							<S.HeaderSectionLogo src={Create} alt="" />
							<S.HeaderSectionText>문서 생성</S.HeaderSectionText>
						</S.HeaderSectionLink>
					)}
				</S.HeaderSectionWrap>
				<S.HeaderSearchWrap>
					<S.HeaderSearchForm onSubmit={(e) => e.preventDefault()}>
						<S.HeaderSearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
						<S.HeaderSearchButton onClick={navigateSearchResult}>
							<S.HeaderSearchLogo src={Search} alt="" />
						</S.HeaderSearchButton>
					</S.HeaderSearchForm>
					<S.HeaderLoginWrap>
						{isLogined ? (
							<S.HeaderMypageText href="/mypage">마이페이지</S.HeaderMypageText>
						) : (
							<S.HeaderLoginText href="https://auth.bssm.kro.kr/oauth?clientId=22fb2e30&redirectURI=https://bumawiki.kro.kr/oauth">
								로그인
							</S.HeaderLoginText>
						)}
					</S.HeaderLoginWrap>
				</S.HeaderSearchWrap>
			</S.HeaderWrap>
			<S.SubHeaderWrap isHover={isHover}>
				<S.SubHeaderPlace>
					<S.HeaderLogo src="/images/logo.png" width="1000" height="1000" alt="logo" />
				</S.SubHeaderPlace>
				<S.HeaderSectionWrap onMouseEnter={() => setIsHover(true)} onMouseLeave={handleMouseLeave}>
					{[
						subheaderInitState.map((subheader, index) => (
							<S.SubHeaderSectionWrap margin={index === 2 ? '2vw' : ''} key={index}>
								{subheader.map((info, index) => (
									<S.SubHeaderSection href={info.href} target={info.target} key={index}>
										<S.HeaderSectionText display="true">{info.title}</S.HeaderSectionText>
									</S.SubHeaderSection>
								))}
							</S.SubHeaderSectionWrap>
						)),
					]}
				</S.HeaderSectionWrap>
			</S.SubHeaderWrap>
		</S.HeaderContainer>
	)
}

export default Header
