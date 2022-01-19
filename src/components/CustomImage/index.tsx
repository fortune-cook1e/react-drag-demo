import React, { CSSProperties } from 'react'
import { IComponentData } from '@/types'
import styles from './index.module.less'

interface Props {
	element: IComponentData
	style: CSSProperties
}

const CustomImage = ({ element, style }: Props): JSX.Element => {
	const { value = '', label } = element
	return (
		<div className={styles.container} style={style}>
			<img src={value} alt={label} />
		</div>
	)
}

export default CustomImage
