import Link from 'next/link'
import styled from 'styled-components'

export const UserWrap = styled.div`
	display: flex;
`

export const UserTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`

export const UserTitleText = styled.span`
	color: #274168;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;
`

export const UserLine = styled.div`
	margin: 30px 0 30px 0;
	width: 100%;
	height: 2px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90%;
	}
`

export const UserInfoWrap = styled.div`
	width: 90%;
`

export const UserInfoLoadWrap = styled.div`
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

export const LogoutText = styled.span`
	color: blue;
	font-weight: 700;
	cursor: pointer;
`

export const ContributeLink = styled(Link)`
	color: blue;
	font-weight: 14px;
`
