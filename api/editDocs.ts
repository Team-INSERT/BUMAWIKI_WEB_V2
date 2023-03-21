import { bumawikiAxios } from '@/lib/axios/customAxios'
import { Storage } from '@/lib/storage/storage'
import { UpdateDocsProps, UpdateDocsTitleProps, UpdateDocsTypeProps } from '@/types/api.type'

export const createDocs = async (data: FormData) => {
	return (
		await bumawikiAxios.post('/docs/create', data, {
			headers: {
				'Content-Type': `multipart/form-data`,
				Authorization: Storage.getItem('access_token'),
				refresh_token: Storage.getItem('refresh_token'),
			},
		})
	).data
}

export const updateDocs = async ({ data, title }: UpdateDocsProps) => {
	return await bumawikiAxios.put(`docs/update/${title}`, data, {
		headers: {
			'Content-Type': `multipart/form-data`,
			Authorization: Storage.getItem('access_token'),
		},
	})
}

export const updateDocsTitle = async ({ title, docsName }: UpdateDocsTitleProps) => {
	return await bumawikiAxios.put(
		`/docs/update/title/${title}`,
		{
			title: docsName,
		},
		{
			headers: {
				Authorization: Storage.getItem('access_token'),
			},
		}
	)
}

export const deleteDocs = async (title: string) => {
	return await bumawikiAxios.delete(`/docs/delete/${title}`, {
		headers: {
			Authorization: Storage.getItem('access_token'),
		},
	})
}

export const updateDocsType = async ({ docsType, title }: UpdateDocsTypeProps) => {
	return await bumawikiAxios.put(
		`/docs/update/title/docsType`,
		{
			title,
			docsType,
		},
		{
			headers: {
				Authorization: Storage.getItem('access_token'),
			},
		}
	)
}
