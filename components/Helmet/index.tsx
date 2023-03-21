import HelmetType from '@/types/helmet.type'
import { typeEditor } from '@/utils'
import Head from 'next/head'
import React from 'react'

const Helmet = ({ docsName, docsType }: HelmetType) => {
	return (
		<Head>
			<title>
				부마위키 - {docsName} ({docsType})
			</title>
		</Head>
	)
}

export default Helmet
