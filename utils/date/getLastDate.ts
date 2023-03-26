import moment from 'moment'
import 'moment/locale/ko'

const getLastDate = (UTC: string) => moment(UTC).fromNow()

export default getLastDate
