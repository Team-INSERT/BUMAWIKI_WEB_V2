const autoClosingTag = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
	const selection = e.target.selectionStart

	if (e.target.value[e.target.selectionStart - 1] === '>') {
		let text = e.target.value.slice(0, e.target.selectionStart)
		const tag = text.substring(text.lastIndexOf('<') + 1, text.length)
		const isWrongTag = text.substring(text.lastIndexOf('<'), text.length)

		if (!isWrongTag.includes('<') || tag.includes('/')) return e.target.value

		if (tag.includes('링크')) {
			text += `</${tag.substring(0, tag.indexOf(' '))}>` + e.target.value.slice(e.target.selectionStart, e.target.value.length)
		} else {
			text += `</${tag}` + e.target.value.slice(e.target.selectionStart, e.target.value.length)
		}

		const after_front_text = e.target.value.slice(0, e.target.selectionStart)
		const insideTag = after_front_text.slice(after_front_text.lastIndexOf('<'), after_front_text.length)

		const after_back_text = e.target.value.slice(e.target.selectionStart, e.target.value.length)
		const outsideTag = after_back_text.slice(after_back_text.indexOf('</'), after_back_text.indexOf('>') + 1).replace('/', '')

		if (insideTag === outsideTag || (insideTag.includes('링크') && outsideTag.includes('링크'))) return e.target.value

		if (insideTag.split('>').length === 3) return e.target.value

		setTimeout(() => {
			e.target.selectionStart = selection
			e.target.selectionEnd = selection
		})
		return text
	}
	return e.target.value
}

export default autoClosingTag
