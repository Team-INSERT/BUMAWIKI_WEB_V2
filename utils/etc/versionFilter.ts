import theme from '@/styles/theme'

const versionFilter = (operation: string) => {
	if (operation === 'EQUAL')
		return {
			color: theme.equalColor,
			text: '',
		}
	if (operation === 'INSERT')
		return {
			color: theme.insertColor,
			text: '+',
		}
	return {
		color: theme.deleteColor,
		text: '-',
	}
}

export default versionFilter
