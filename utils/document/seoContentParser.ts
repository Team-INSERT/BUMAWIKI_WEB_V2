const seoContentParser = (contents: string) => {
	const seoContents = `${contents
		.replace(/<br>/gi, ' ')
		.replace(/<소제목>/gi, '')
		.replace(/<\/소제목>/gi, ':')
		.slice(0, 20)}...`

	return seoContents
}
