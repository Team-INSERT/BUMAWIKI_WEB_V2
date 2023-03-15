import { bumawikiAxios } from 'lib/axios/customAxios'
import * as FC from 'utils'

interface UpdateDocsTitleProps {
	title: string
	docsName: string
}

interface UpdateDocsProps {
	data: FormData
	title: string
}

export const updateDocsTitle = async ({ title, docsName }: UpdateDocsTitleProps) => {
	return await bumawikiAxios.put(
		`/docs/update/title/${title}`,
		{
			title: docsName,
		},
		{
			headers: {
				Authorization: FC.getCookie('authorization'),
			},
		}
	)
}

export const createDocs = async (data: FormData) => {
	return (
		await bumawikiAxios.post('/docs/create', data, {
			headers: {
				'Content-Type': `multipart/form-data`,
				Authorization: FC.getCookie('authorization'),
				refresh_token: FC.getCookie('refresh_token'),
			},
		})
	).data
}

export const updateDocs = async ({ data, title }: UpdateDocsProps) => {
	return await bumawikiAxios.put(`docs/update/${title}`, data, {
		headers: {
			'Content-Type': `multipart/form-data`,
			Authorization: FC.getCookie('authorization'),
		},
	})
}

export const deleteDocs = async (title: string) => {
	return await bumawikiAxios.delete(`/docs/delete/${title}`, {
		headers: {
			Authorization: FC.getCookie('authorization'),
		},
	})
}
