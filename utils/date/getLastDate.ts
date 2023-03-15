import moment from 'moment'
import 'moment/locale/ko'

const getLastDate = (UTC: string) => {
	const date = new Date(UTC)
	const lastModifiedAt = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]

	return moment(lastModifiedAt).fromNow()
}

export default getLastDate
