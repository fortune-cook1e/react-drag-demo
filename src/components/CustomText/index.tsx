import React, { CSSProperties } from 'react'
import { IComponentData } from '@/types'

interface Props {
	element: IComponentData
	style: CSSProperties
}

const CustomText = ({ element, style }: Props): JSX.Element => {
	const { label = '', icon = '', value = '' } = element

	return <div style={style}>{value}</div>
}

export default CustomText
