import { bumawikiAxios } from '@/lib/axios/customAxios'

export const getDocs = async (title: string) => {
	return (await bumawikiAxios.get(`/docs/find/title/${title}`)).data
}

export const getLastModifiedDocs = async (page: number) => {
	return (await bumawikiAxios.get(`/docs/find/modified?page=${page}`)).data
}

export const getFindDocs = async (title: string) => {
	return (await bumawikiAxios.get(`/docs/find/all/title/${title}`)).data
}

export const getVersionDocs = async (title: string) => {
	return (
		await bumawikiAxios.get(`docs/find/${title}/version`, {
			headers: {
				'Content-Type': `application/json; charset=utf-8;`,
			},
		})
	).data
}

export const getBaseDocs = async (docsType: string) => {
	return (await bumawikiAxios.get(`/docs/${docsType}`)).data
}
