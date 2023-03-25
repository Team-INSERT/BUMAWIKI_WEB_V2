import Link from 'next/link'
import styled from 'styled-components'

export const StudentWrap = styled.div`
	display: flex;
`

export const StudentTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
`

export const StudentTitleText = styled.span`
	color: #274168;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;
`

export const StudentClassify = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
	margin-bottom: 30px;
`

export const StudentLine = styled.div`
	width: 68vw;
	height: 1.5px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90vw;
	}
`

export const StudentListWrap = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

export const StudentList = styled.ul`
	margin: 30px 0 0 50px;
	font-weight: 600;
`

export const StudentLink = styled(Link)`
	color: #0038ff;
	text-decoration: none;
	cursor: pointer;
`

export const StudentListItem = styled.li`
	margin-bottom: 18px;
	color: #0038ff;
`
