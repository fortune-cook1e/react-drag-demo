import React, { ChangeEventHandler } from 'react'
import { Input } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
	updateCurrentComponent,
	componentSelector
} from '@/store/slices/component'

const ImageBase = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const { currentComponent } = useAppSelector(componentSelector)

	const handleImageComponentUrlChange = (event: any) => {
		if (!currentComponent) return
		const value = event?.target
		if (!value) return
		const newComponentData = {
			...currentComponent,
			value
		}
		dispatch(updateCurrentComponent(newComponentData))
	}

	return (
		<>
			<div>
				<p>图片链接</p>
				<Input
					value={currentComponent?.value}
					onChange={handleImageComponentUrlChange}
				/>
			</div>
		</>
	)
}

export default ImageBase
