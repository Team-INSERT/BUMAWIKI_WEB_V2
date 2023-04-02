import styled from 'styled-components'

export const DragDropWrap = styled.div`
	display: flex;
	margin: 20px auto 0 3.6vw;

	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const NoneDisplayInput = styled.input`
	display: none;
`

export const DragDropButton = styled.label`
	width: 400px;
	height: 200px;
	border: 2px solid #ccc;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.12s ease-in;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const DragDropTitle = styled.div`
	font-weight: 600;
	font-size: 14px;
`

export const DragDropFiles = styled.div`
	margin-top: 14px;
	width: 100%;
`

export const DragDropFile = styled.div`
	display: flex;
	height: 28px;
	border: 2px solid #ccc;
	align-items: center;
	padding: 0 6px 0 12px;
	margin: 6px 0 6px 0;
`

export const DragDropFileName = styled.div`
	font-size: 14px;
	font-weight: 600;
`

export const DragDropFileDeleteButton = styled.button`
	margin-left: auto;
	width: 20px;
	height: 20px;
	border: none;
	background-color: transparent;
	font-weight: 900;
	color: #8a8a8a;
`
