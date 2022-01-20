import React, { CSSProperties } from 'react'
import { InputNumber } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
	updateCurrentComponent,
	componentSelector
} from '@/store/slices/component'
import { removeUnitFromStyle, addUnit } from '@/utils'

const Base = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const { currentComponent } = useAppSelector(componentSelector)

	const handleValueChange = (field: string) => (value: number) => {
		if (!currentComponent) return

		const newComponentData = {
			...currentComponent,
			style: {
				...currentComponent.style,
				[field]: addUnit(value)
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
					value={getCurrentComponentValue('left')}
					onChange={handleValueChange('left')}
				/>
			</div>

			<div>
				<p>Y 坐标</p>
				<InputNumber
					value={getCurrentComponentValue('top')}
					onChange={handleValueChange('top')}
				/>
			</div>
			<div>
				<p>宽</p>
				<InputNumber
					min={1}
					value={getCurrentComponentValue('width')}
					onChange={handleValueChange('width')}
				/>
			</div>
			<div>
				<p>高</p>
				<InputNumber
					min={1}
					value={getCurrentComponentValue('height')}
					onChange={handleValueChange('height')}
				/>
			</div>
		</>
	)
}

export default Base
