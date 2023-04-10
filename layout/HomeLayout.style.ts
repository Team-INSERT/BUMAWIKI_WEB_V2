import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export const CustomToastContainer = styled(ToastContainer)`
	.Toastify__toast {
		color: black;
		font-size: 14px;
	}
`

export const HomeWrap = styled.div`
	display: flex;
`

export const HomeLine = styled.div`
	width: 68vw;
	height: 1.5px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90vw;
	}
`

export const HomeTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
`

export const HomeTitleText = styled.span`
	color: #274168;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;
`

export const HomeClassify = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
	margin-bottom: 30px;
`

export const HomeDescriptionWrap = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	color: #545454;
`

export const HomeDescriptionText = styled.span`
	font-size: 28px;

	span {
		color: #274168;
	}

	@media (max-width: 500px) {
		font-size: 18px;
	}
`

export const HomeDescriptionSubText = styled.span`
	font-weight: 600;
	font-size: 16px;

	@media (max-width: 500px) {
		font-size: 12px;
	}

	span {
		color: #274168;
	}
`

export const HomeDescriptionContents = styled.span`
	text-align: center;
	font-weight: 500;
	font-size: 14px;
	margin-top: 40px;

	@media (max-width: 500px) {
		font-size: 10px;
	}

	span {
		color: #274168;
	}
`

export const TitleBoxWrap = styled.div`
	width: 48vw;
	height: fit-content;
	margin-top: 50px;

	@media (max-width: 500px) {
		width: 88vw;
	}
`

export const TitleBoxMainWrap = styled.div`
	width: 100%;
	height: 90px;
	background-color: #274168;
	border: 2px solid #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 500px) {
		height: 50px;
	}
`

export const TitleBoxMainTitle = styled.span`
	font-family: 'Open Sans', sans-serif;
	color: white;
	font-weight: 800;
	font-size: 24px;

	@media (max-width: 500px) {
		font-size: 16px;
	}
`

export const TitleBoxMainEngTitle = styled.span`
	color: white;
	font-weight: 300;
	font-size: 14px;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const SchoolImage = styled.img`
	width: 100%;
	height: auto;
	border-right: 2px solid #ccc;
	border-left: 2px solid #ccc;
	border-bottom: 2px solid #ccc;
`

export const TableWrap = styled.div`
	width: 100%;
	height: 45px;
	background-color: #fff;
	display: flex;
	align-items: center;
	border-right: 2px solid #ccc;
	border-left: 2px solid #ccc;
	border-bottom: 2px solid #ccc;
	margin-top: -4px;
	margin-bottom: 4px;

	@media (max-width: 500px) {
		height: 30px;
	}
`

export const TableName = styled.div`
	width: 140px;
	height: 100%;
	background-color: #274168;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 500px) {
		width: 100px;
	}
`

export const TableContent = styled.div`
	width: 100%;
	height: 100%;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		color: black;
	}
`

export const TableText = styled.span`
	color: #fff;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 18px;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const TableLink = styled.a`
	color: blue;
	font-weight: 600;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const SummaryWrap = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

export const SummaryContent = styled.p`
	margin: 30px 0 40px 0;
	display: flex;
	align-items: center;
	margin-left: 30px;
	font-weight: 500;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`

export const SummaryVideoWrap = styled.div`
	display: flex;
	justify-content: center;
`

export const SummaryVideo = styled.iframe`
	width: 800px;
	height: 450px;

	@media (max-width: 500px) {
		width: 96%;
		height: auto;
	}
`

export const DepartmentWrap = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

export const DepartmentContent = styled.p`
	margin: 20px 0 40px 0;
	display: flex;
	align-items: center;
	margin-left: 30px;
	font-weight: 500;

	&:first-child {
		margin-top: 30px;
	}

	@media (max-width: 500px) {
		font-size: 12px;
	}
`

export const DepartmentTitle = styled.span`
	margin-left: 30px;
	font-weight: 800;
	color: #545454;
	font-size: 24px;
`

export const SongWrap = styled.div`
	margin-top: 20px;
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`

export const SongContent = styled.p`
	margin: 30px 0 40px 0;
	display: flex;
	align-items: center;
	margin-left: 30px;
	font-weight: 600;
	line-height: 35px;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`

export const HistoryWrap = styled.div`
	margin-top: 20px;
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`

export const TableHistoryName = styled.div`
	width: 140px;
	height: 100%;
	background-color: #274168;
	display: flex;
	align-items: center;
	justify-content: center;
	border-right: 2px solid #ccc;

	@media (max-width: 500px) {
		width: 100px;
	}
`

export const HistoryContent = styled.div`
	display: flex;
	justify-content: center;
`

export const TableHistoryWrap = styled.div`
	width: 100%;
	height: 45px;
	background-color: #fff;
	display: flex;
	align-items: center;
	border: 2px solid #ccc;
	margin-top: -4px;
	margin-bottom: 4px;

	@media (max-width: 500px) {
		height: 30px;
	}
`

export const TableHistory = styled.div`
	width: 100%;
	height: 100%;
	background-color: #274168;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		color: white;
	}
`

export const BusWrap = styled.div`
	margin-top: 20px;
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`

export const BusDescription = styled.div`
	display: flex;
	justify-content: center;
`

export const BusContent = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	margin-bottom: -30px;
	font-weight: 500;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`

export const NotFoundWrap = styled.div`
	display: flex;
`

export const NotFound = styled.span`
	font-size: 30px;
	font-weight: 800;
	margin-top: 2vh;
`
