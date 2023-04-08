import * as api from '@/api/getDocs'
import httpClient from '@/lib/httpClient'

const includeFrame = async (frameTitle: string) => {
	const res = (await httpClient.docs.getByTitle(frameTitle)).data
	if (res.docsType === 'FRAME') return res.contents
	return '포함할 대상이 틀이 아닙니다'
}

export default includeFrame
