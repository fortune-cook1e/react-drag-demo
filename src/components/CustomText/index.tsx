import React from 'react'
import { IComponentData } from '@/types'

interface Props {
	element: IComponentData
}

const CustomText = ({ element }: Props): JSX.Element => {
	const { label = '', icon = '', style, value = '' } = element
	return (
		<div style={style}>
			<p>{value}</p>
		</div>
	)
}

export default CustomText
