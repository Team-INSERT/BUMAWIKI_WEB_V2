import Accident from 'assets/accident.svg'
import Club from 'assets/club.svg'
import Student from 'assets/student.svg'
import Teacher from 'assets/teacher.svg'

export const headerInitState = [
	{
		image: Student,
		title: '공지',
	},
	{
		image: Teacher,
		title: '학교',
	},
	{
		image: Accident,
		title: '기타',
	},
	{
		image: Club,
		title: '외부 서비스',
	},
]

export const subheaderInitState = [
	[
		{
			href: '/docs/부마위키%20업데이트%20내역',
			title: '공지사항',
		},
		{
			href: '/docs/부마위키%20방명록',
			title: '방명록',
		},
		{
			href: '/docs/부마위키%20개인정보처리방침',
			title: '처리방침',
		},
		{
			href: 'https://forms.gle/DzAP7XSYH4ubK43FA',
			title: '문의하기',
			target: '_blank',
		},
	],
	[
		{
			href: '/student',
			title: '학생',
		},
		{
			href: '/teacher',
			title: '선생님',
		},
		{
			href: '/club',
			title: '동아리',
		},
	],
	[
		{
			href: '/frame',
			title: '틀',
		},
		{
			href: '/accident',
			title: '사건',
		},
		{
			href: '/popular',
			title: '인기',
		},
	],
	[
		{
			href: 'https://bssm.kro.kr',
			title: 'BSM',
		},
		{
			href: 'https://bgit.bssm.kro.kr',
			title: 'BGIT',
		},
		{
			href: 'https://www.simblue.kro.kr/',
			title: '심청이',
		},
	],
]
