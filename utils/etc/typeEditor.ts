const typeEditor = (classify: string) => {
	if (classify === 'STUDENT') return '학생'
	if (classify === 'ACCIDENT') return '사건/사고'
	if (classify === 'CLUB') return '전공 동아리'
	if (classify === 'TEACHER') return '인문교과 선생님'
	if (classify === 'MAJOR_TEACHER') return '전문교과 선생님'
	if (classify === 'MENTOR_TEACHER') return '멘토 선생님'
	if (classify === 'FREE_CLUB') return '사설 동아리'
	if (classify === 'ADMIN') return '관리자'
	if (classify === 'BANNED') return '읽기전용 사용자'
	if (classify === 'USER') return '사용자'
	if (classify === 'NOTICE') return '공지'
	if (classify === 'FRAME') return '틀'
	return classify
}

export default typeEditor
