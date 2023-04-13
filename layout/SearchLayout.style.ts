import Link from 'next/link'
import styled from 'styled-components'

export const SearchWrap = styled.div`
	display: flex;
`

export const SearchLine = styled.div`
	width: 68vw;
	height: 1.5px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90vw;
	}
`

export const SearchTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;

	span {
		color: #274168;
		font-weight: 800;
		font-size: 34px;
		margin-left: 30px;
	}
`

export const Classify = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
	margin-bottom: 30px;
`

export const SearchResult = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

export const SearchList = styled.ul`
	margin: 30px 0 0 50px;
	font-weight: 600;
`

export const SearchListItem = styled.li`
	margin-bottom: 30px;
	color: #0038ff;
`

export const SearchLink = styled(Link)`
	color: #0038ff;
	text-decoration: none;
	cursor: pointer;
`

export const SearchCreateLink = styled(Link)`
	text-decoration: none;
	color: blue;
`
