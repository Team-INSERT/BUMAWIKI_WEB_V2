import * as util from '@/utils'
import * as S from '../../layout/update/style'
import * as getApi from '@/api/getDocs'
import * as editApi from '@/api/editDocs'

import Check from 'assets/check.svg'
import userState from '@/context/userState'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { MutationFunction, useMutation } from 'react-query'
import UpdateDocsType from '@/types/update.type.'
import { decodeContents, encodeContents } from '@/utils/document/requestContents'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import Docs from '@/types/docs.type'
import { GetStaticProps } from 'next'
import { Storage } from '@/lib/storage/storage'
import { NextSeo, NextSeoProps } from 'next-seo'
import { Aside, Board, ScrollBtn, SubFooter } from '@/components'
import Image from 'next/image'
import theme from '@/styles/theme'

interface SinglDocsPropsType {
	defaultDocs: Docs
	title: string
}

const Update = ({ defaultDocs, title }: SinglDocsPropsType) => {
	const router = useRouter()
	const user = useRecoilValue(userState)
	const textareaRef = React.useRef<HTMLTextAreaElement>(null)

	const [docs, setDocs] = React.useState<UpdateDocsType>({
		title: defaultDocs?.title,
		contents: decodeContents(defaultDocs?.contents || ''),
		files: [],
	})
	const [fileInput, setFileInput] = React.useState([''])
	const [isOnAutoComplete, setIsOnAutoComplete] = React.useState(JSON.parse(Storage.getItem('autoComplete') || 'true'))

	const { mutate } = useMutation(editApi.updateDocs as MutationFunction, {
		onSuccess: () => {
			alert('문서가 편집되었습니다!')
			router.push(`/docs/${title}`)
			console.log('asdnaslkdn')
		},
		onError: (err) => {
			if (err instanceof AxiosError) {
				const { status, message, error } = err?.response?.data
				console.log(status, message, err)
				if (status === 403) {
					if (message === 'Cannot Change Your Docs') return alert('자기 자신의 문서는 편집할 수 없습니다.')
					if (error === 'Forbidden') return alert('읽기전용 사용자는 문서를 편집할 수 없습니다.')
				}
			}
		},
	})

	const onClickAutoComplete = () => {
		localStorage.setItem('autoComplete', `${!isOnAutoComplete}`)
		setIsOnAutoComplete(!isOnAutoComplete)
		if (textareaRef.current) textareaRef.current.focus()
	}

	const mutateUpdateDocs = () => {
		const FormData = require('form-data')
		const data = new FormData()
		data.append(
			'request',
			new Blob([`{ "contents": "${encodeContents(docs.contents)}" }`], {
				type: 'application/json',
			}),
			{ contentType: 'application/json' }
		)
		docs.files.forEach((file) => data.append('files', file, file.name))

		mutate({ data, title })
	}

	const onClickUpdateDocs = async () => {
		if (!user.id) return alert('로그인 후 이용 가능한 서비스입니다.')
		if (!docs.contents.length) return alert('문서가 비어있습니다!')

		mutateUpdateDocs()
	}

	const seoConfig: NextSeoProps = {
		title: `부마위키 문서편집 - ${defaultDocs?.title}`,
		description: `"${defaultDocs?.title}" 문서편집 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 문서편집 - ${defaultDocs?.title}`,
			description: `"${defaultDocs?.title}" 문서편집 페이지입니다.`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<S.DocsWrap>
				<Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>문서 편집 : {docs.title}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.DocsExampleImage src="/images/references.png" alt="문서작성법" />
					<S.DocsLine />
					<S.DocsContentsWrap>
						{fileInput.map((index) => (
							<input
								key={index}
								type="file"
								accept="image/*"
								onChange={(e) => {
									if (e.target.files) setDocs({ ...docs, files: [...docs.files, e.target.files[0]] })
								}}
							/>
						))}
						<S.FileAddWrap onClick={() => setFileInput([...fileInput, ''])}>
							<S.FileAddButton>+</S.FileAddButton>
							<S.FileAddText>사진 더 선택하기</S.FileAddText>
						</S.FileAddWrap>
						<S.DocsNeedFileText>문서에 필요한 사진태그 개수 : {docs.files.length}개</S.DocsNeedFileText>
						<S.AutoCompleteToggleWrap onClick={onClickAutoComplete}>
							<S.AutoCompleteToggleText>자동완성</S.AutoCompleteToggleText>
							<S.AutoCompleteToggleButton color={isOnAutoComplete ? theme.primary : theme.white}>
								<Image src={Check} alt="" />
							</S.AutoCompleteToggleButton>
						</S.AutoCompleteToggleWrap>
						<S.UpdateTextarea
							ref={textareaRef}
							onKeyDown={(e) => util.onKeyDownUseTab(e)}
							onChange={(e) => setDocs(isOnAutoComplete ? { ...docs, contents: util.autoClosingTag(e) } : { ...docs, contents: e.target.value })}
							value={decodeContents(docs.contents || '')}
						/>
						<S.UpdatePreviewText>미리보기</S.UpdatePreviewText>
						<S.UpdatePreview
							dangerouslySetInnerHTML={{
								__html: util.documentation(docs.contents),
							}}
						/>
						<S.UpdateSubmit>
							<S.UpdateWarn>※ 타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는 문제에 대한 책임은 본인에게 있습니다. 주의해주세요! ※</S.UpdateWarn>
							<S.UpdateButton onClick={onClickUpdateDocs}>문서 업데이트</S.UpdateButton>
						</S.UpdateSubmit>
					</S.DocsContentsWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.DocsWrap>
		</>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = await getApi.getDocs(params?.title as string)

	return {
		props: {
			defaultDocs: res,
			title: params?.title,
		},
	}
}

export default Update

// revalidate :
// https://github.com/bssm-portfolio/app/blob/develop/pages/api/revalidate-portfolio.ts
// https://github.com/bssm-portfolio/app/blob/develop/components/portfolio/edit/index.tsx#L78
