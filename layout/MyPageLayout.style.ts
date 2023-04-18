import Link from 'next/link'
import styled from 'styled-components'

export const MyPageWrap = styled.div`
	display: flex;
`

export const MyPageTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`

export const MyPageTitleText = styled.span`
	color: #274168;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;
`

export const MyPageLine = styled.div`
	margin: 30px 0 30px 0;
	width: 100%;
	height: 2px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90%;
	}
`

export const MyPageInfoWrap = styled.div`
	width: 90%;
`

export const MyPageInfoLoadWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	font-size: 16px;
	margin-bottom: 50px;
`

export const ContributeWrap = styled.div`
	margin-top: 20px;
`

export const ContributeList = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;

	span {
		margin: 10px 0 10px 0;
		font-weight: 500;
		line-height: 24px;

		.contribute-link {
			text-decoration: none;
			color: blue;
		}
	}
`

export const ContributeListText = styled.span`
	margin: 10px 0 10px 0;
	font-weight: 500;
	line-height: 24px;
`

export const LogoutText = styled.span`
	color: blue;
	font-weight: 700;
	margin-top: 16px;
	cursor: pointer;
`

export const ContributeLink = styled(Link)`
	color: blue;
	font-weight: 14px;
`
