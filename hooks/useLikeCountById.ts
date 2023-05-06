import httpClient from '@/lib/httpClient'

const useLikeCountById = (docsId?: number) => {
	const getLikeList = async () => {
		return (await httpClient.getLike.get()).data
	}

	const getIsLike = async () => {
		if (!docsId) return false
		return (await httpClient.isLike.getByTitle(docsId.toString())).data
	}

	const createLike = () => {
		if (!docsId) return false
		return httpClient.createLike.post({ docsId })
	}

	const deleteLike = () => {
		if (!docsId) return false
		return httpClient.deleteLike.delete({ data: { docsId } })
	}

	return { getLikeList, getIsLike, createLike, deleteLike }
}

export default useLikeCountById
