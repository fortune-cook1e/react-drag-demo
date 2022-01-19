import React, { CSSProperties, useMemo } from 'react'
import clsx from 'classnames'
import styles from './index.module.less'
import { useAppSelector, useAppDispatch } from '@/hooks'
import {
	componentSelector,
	setCurrentComponent
} from '@/store/slices/component'
import { IComponentData } from '@/types'

interface Props {
	style: CSSProperties
	element: IComponentData
	children: React.ReactNode
}

const Shape = ({ style, element, children }: Props): JSX.Element => {
	const dispatch = useAppDispatch()
	const { currentComponent } = useAppSelector(componentSelector)
	const { id } = element

	const isActive = useMemo(() => {
		return currentComponent ? currentComponent.id === id : false
	}, [currentComponent, id])

	const handleSelectComponent = (event: React.MouseEvent<HTMLElement>) => {
		// 阻止事件冒泡(Home 组件的 deselect事件)
		event.stopPropagation()
		dispatch(setCurrentComponent(element))
	}

	return (
		<div
			className={clsx(styles.shape, { [styles.shape_active]: isActive })}
			style={style}
			onClick={handleSelectComponent}
		>
			{children}
		</div>
	)
}

export default Shape
