import React, { CSSProperties } from 'react'
import { InputNumber } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
	updateCurrentComponent,
	componentSelector
} from '@/store/slices/component'
import { removeUnitFromStyle } from '@/utils'

// TODO: 这里InputNumber的数据 需要用getCurrentComponentValue方法把数字从样式中提出来
const Base = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const { currentComponent } = useAppSelector(componentSelector)

	const handleValueChange = (field: string) => (value: number) => {
		if (!currentComponent) return

		const newComponentData = {
			...currentComponent,
			style: {
				...currentComponent.style,
				[field]: value
			}
		}
		dispatch(updateCurrentComponent(newComponentData))
	}

	const getCurrentComponentValue = (field: keyof CSSProperties) => {
		return removeUnitFromStyle({
			style: currentComponent?.style,
			field
		})
	}

	return (
		<>
			<div>
				<p>X 坐标</p>
				<InputNumber
					value={Number(currentComponent?.style.left)}
					onChange={handleValueChange('left')}
				/>
			</div>

			<div>
				<p>Y 坐标</p>
				<InputNumber
					value={Number(currentComponent?.style.top)}
					onChange={handleValueChange('top')}
				/>
			</div>
			<div>
				<p>宽</p>
				<InputNumber
					min={1}
					value={removeUnitFromStyle({
						style: currentComponent?.style,
						field: 'width'
					})}
					onChange={handleValueChange('width')}
				/>
			</div>
			<div>
				<p>高</p>
				<InputNumber
					min={1}
					value={removeUnitFromStyle({
						style: currentComponent?.style,
						field: 'height'
					})}
					onChange={handleValueChange('height')}
				/>
			</div>
		</>
	)
}

export default Base
