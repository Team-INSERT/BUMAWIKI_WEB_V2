import { bumawikiAxios } from '@/lib/axios/customAxios'
import * as FC from '@/utils'

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
				Authorization: localStorage.getItem('access_token'),
			},
		}
	)
}

export const createDocs = async (data: FormData) => {
	return (
		await bumawikiAxios.post('/docs/create', data, {
			headers: {
				'Content-Type': `multipart/form-data`,
				Authorization: localStorage.getItem('access_token'),
				refresh_token: localStorage.getItem('refresh_token'),
			},
		})
	).data
}

export const updateDocs = async ({ data, title }: UpdateDocsProps) => {
	return await bumawikiAxios.put(`docs/update/${title}`, data, {
		headers: {
			'Content-Type': `multipart/form-data`,
			Authorization: localStorage.getItem('access_token'),
		},
	})
}

export const deleteDocs = async (title: string) => {
	return await bumawikiAxios.delete(`/docs/delete/${title}`, {
		headers: {
			Authorization: localStorage.getItem('access_token'),
		},
	})
}
