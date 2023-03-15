import Link from 'next/link'
import styled from 'styled-components'

export const AsideWrap = styled.div`
	width: 240px;
	height: fit-content;
	margin-top: 20px;
	position: sticky;
	top: 2vw;

	@media (max-width: 500px) {
		display: none;
	}
`

export const AsideTitleWrap = styled.div`
	width: 100%;
	height: 50px;
	background-color: #274168;
	display: flex;
	align-items: center;
	border: 2px solid #ccc;
`

export const AsideTitle = styled.span`
	text-decoration: none;
	color: #fff;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 18px;
	margin-left: 20px;
`

export const AsideDocWrap = styled.div`
	width: 100%;
	height: 40px;
	background-color: #fff;
	display: flex;
	align-items: center;
	border: 2px solid #ccc;
	border-top: none;
`

export const AsideList = styled(Link)`
	color: #274168;
	margin-left: 10px;
	text-decoration: none;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 14px;
`

export const AsideLastModified = styled.span`
	font-size: 10px;
	color: rgb(146, 146, 146);
`
