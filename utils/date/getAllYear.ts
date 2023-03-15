const getAllYear = () => {
	const years = []
	const date = new Date()
	for (let year = 2021; year <= date.getFullYear(); year++) {
		years.push(year)
	}
	return years.reverse()
}

export default getAllYear
