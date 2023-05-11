import httpClient from '@/lib/httpClient'
import Docs from '@/types/docs.type'

const useLikeCountById = (docs?: Docs) => {
	const getLikeList = async () => {
		return (await httpClient.getMyLike.get()).data
	}

	const getLikeCounts = async () => {
		if (!!docs) return (await httpClient.getLike.getByTitle(docs.title)).data.thumbsUpsCount
	}

	const getIsLike = async () => {
		if (!!docs) return (await httpClient.isLike.getByTitle(docs.id.toString())).data
	}

	const createLike = () => {
		if (!!docs) return httpClient.createLike.post({ docsId: docs.id })
	}

	const deleteLike = () => {
		if (!!docs) return httpClient.deleteLike.delete({ data: { docsId: docs.id } })
	}

	return { getLikeList, getLikeCounts, getIsLike, createLike, deleteLike }
}

export default useLikeCountById
