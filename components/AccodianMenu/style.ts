import Image from 'next/image'
import styled from 'styled-components'

export const AccodianWrap = styled.div``

export const AccodianArrow = styled(Image)``

export const AccodianTitleWrap = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`

export const AccodianName = styled.span<{ opacity: number }>`
	font-size: 30px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	color: #545454;
	margin-bottom: 5px;
	opacity: ${(props) => props.opacity || 1};
`

export const AccodianLine = styled.div`
	width: 100%;
	height: 2px;
	background-color: #ccc;
`

export const AccodianDetail = styled.div`
	margin-bottom: 10px;
`
