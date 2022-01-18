import React, { CSSProperties } from 'react'
import clsx from 'classnames'
import styles from './index.module.less'

interface Props {
	style: CSSProperties
	children: React.ReactNode
}

const Shape = ({ style, children }: Props): JSX.Element => {
	return (
		<div
			className={clsx(styles.shape, { [styles.shape_active]: true })}
			style={style}
		>
			{children}
		</div>
	)
}

export default Shape
