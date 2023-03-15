export const encodeContents = (contents: string) => {
	return contents.replace(/\n/gi, '<br>').replace(/"/gi, '&quot;')
}

export const decodeContents = (contents: string) => {
	return contents.replace(/<br>/gi, '\n').replace(/&quot;/gi, '"')
}
