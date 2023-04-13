import styled, { css } from 'styled-components'

export const CreateWrap = styled.div`
	display: flex;
`

export const CreateTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
`

export const CreateTB = styled.table`
	width: 68vw;

	@media (max-width: 500px) {
		width: 90vw;
	}
	background-color: #ccc;
`

export const CreateTR = styled.tr`
	height: 40px;
	background-color: white;
`

export const CreateTD = styled.td`
	width: 100%;
	height: 90%;
	padding-left: 20px;
	border: none;
	white-space: pre-wrap;
	font-size: 14px;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const CreateTDTitle = styled.td`
	width: 7.5%;
	background-color: #274168;
	color: white;
	text-align: center;
	font-weight: 800;

	@media (max-width: 500px) {
		font-size: 12px;
		width: 70px;
	}
`

export const CreateTDDisplay = styled.td`
	display: flex;
	height:40px;
	align-items:center;
	padding-left: 20px;
	border: none;
	white-space: pre-wrap;
	font-size: 14px;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const CreateTDHtmlDiv = styled.td`
	width: 100%;
	height: 400px;
	padding:20px;
	border: none;
	white-space: pre-wrap;
	overflow: scroll;

	vertical-align:top;

	@media (max-width: 500px) {
		font-size: 100px;
	}
`

export const FrameWrap = styled.div`
	padding:10px;
`

export const CreateTableDiv = styled.div`
`

export const CreateTableBody = styled.tbody`
`

export const CreateTableLabel = styled.label`
	font-size:16px;
	font-weight:700;

	@media (max-width: 700px) {
		font-size: 10px;

	}
`

//========================================================

export const CreateTitleText = styled.span`
	color: #274168;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;
`

export const CreateTable = styled.div`
	width: 68vw;

	@media (max-width: 500px) {
		width: 90vw;
	}
`

export const CreateTableTR = styled.div`
	display: flex;
	width: 100%;
	height: 40px;
	align-items: center;
	border: 2px solid #ccc;
	border-bottom: none;
`

export const CreateTableTRInput = styled.input`
	width: 500px;
	margin-left: 10px;

	@media (max-width: 500px) {
		width: 180px;
		margin-left: 10px;
	}
`

export const CreateTableTRTextarea = styled.textarea`
	width: 100%;
	height: 400px;
	outline: none;
	padding-top:20px;
	resize: none;
	border: none;
	white-space: pre-wrap;
	font-size: 14px;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const CreateTableTRDiv = styled.div`
	width: 100%;
	height: 90%;
	padding-left: 20px;
	border: none;
	white-space: pre-wrap;
	font-size: 14px;
	overflow: scroll;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const FrameInputWrap = styled.div`
	display: flex;
	margin: 5px 10px 4px 0;
`

export const CreateTableTRFrame = styled.div`
	height: 100px;
	display: flex;
	width: 100%;
	align-items: center;
	border: 2px solid #ccc;
	border-bottom: none;

	@media (max-width: 500px) {
		height: 100px;
	}
`

export const CreateTableTRColorInput = styled.input`
	width: 25px;
	height: 50px;
	margin: 5px;
`

export const FrameInputBox = styled.div`
	display: flex;
`

export const FrameText = styled.div`
	font-size: 15px;
	font-weight: 700;
	margin-right:5px;
	padding: 2px;
`

export const FrameInputDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	padding-left: 20px;
`

export const FrameInput = styled.input`
	width: 90px;
	margin: 0 10px 0 10px;
	height: 20px;
`

export const CreateFrameButton = styled.button`
	width: 265px;
	height: 30px;
	border: 2px solid #ccc;
	background-color: #274168;
	color: white;
	font-weight: 800;
	cursor: pointer;
`

export const CreateTableTRTitle = styled.div`
	background-color: #274168;
	height: 100%;
	width: 110px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 800;

	@media (max-width: 500px) {
		font-size: 12px;
		width: 70px;
	}
`

export const CreateTableTRInputContents = styled.input`
	font-weight: 700;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	font-size: 16px;
	display: flex;
	align-items: center;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`

export const CreateTableRadioBox = styled.div`
	@media (max-width: 500px) {
		display: none;
	}
`

export const CreateTableSelectBox = styled.select`
	@media (min-width: 500px) {
		display: none;
	}
`

export const CreateTableSelectOption = styled.option``

export const CreateTableRadio = styled.input`
	margin-left: 6px;
	margin-right: 30px;

	&:first-child {
		margin-left: 5px;

		@media (max-width: 500px) {
			margin-left: 0;
		}
	}

	@media (max-width: 500px) {
		margin-left: 5px;
	}
`

export const EnrollLabel = styled.label`
	font-weight: 600;
`

export const CreateTableTRExample = styled.div`
	height: 260px;
	display: flex;
	width: 100%;
	align-items: center;
	border: 2px solid #ccc;
	border-bottom: none;

	@media (max-width: 500px) {
		height: 100px;
	}
`

export const CreateTableTRFile = styled.div`
	height: fit-content;
	display: flex;
	width: 100%;
	align-items: center;
	border: 2px solid #ccc;
	border-bottom: none;

	@media (max-width: 500px) {
		height: 100px;
	}
`

export const FileInputWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	padding-left: 20px;
`

export const ExampleImage = styled.img`
	height: 100%;
	width: 90%;

	@media (max-width: 500px) {
		width: 96%;
	}
`

export const CreateTableTRTextContent = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	border: 2px solid #ccc;
	border-bottom: 2px solid #ccc;
	height: 400px;

	@media (max-width: 500px) {
		height: 100px;
	}
`

export const CreateSubmit = styled.div`
	display: flex;
	width: 68vw;
	height: 50px;
	margin-bottom: 20px;
`

export const CreateWarn = styled.span`
	color: red;
	font-weight: 800;
	margin: 10px auto 0 0;

	@media (max-width: 500px) {
		font-size: 8px;
	}
`

export const CreateButton = styled.button`
	margin-top: 10px;
	width: 130px;
	height: 40px;
	border: 2px solid #ccc;
	background-color: #274168;
	color: white;
	font-weight: 800;
	cursor: pointer;

	@media (max-width: 500px) {
		width: 200px;
	}
`
