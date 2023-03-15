import typeEditor from './typeEditor'

const asideFormat = (docsTitle: string, docsType: string) => {
	let title = docsTitle
	const type = typeEditor(docsType)
	if (title.length > 12) {
		title = `${title.slice(0, 12)}...`
	}
	if (type.includes('선생님')) {
		return `${title} (선생님)`
	}
	if (type.includes('동아리')) {
		return `${title} (동아리)`
	}
	if (type.includes('사건')) {
		return `${title} (사건)`
	}
	return `${title} (${type})`
}

export default asideFormat
