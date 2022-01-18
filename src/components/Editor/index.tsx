import React, { useEffect } from 'react'
import CustomText from '../CustomText'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { componentSelector } from '@/store/slices/component'
import styles from './index.module.less'

const CustomComponentMap = {
	CustomText
}

const Editor = (): JSX.Element => {
	const { componentData } = useAppSelector(componentSelector)

	console.log('render component data', { componentData })

	return (
		<div id='editor' className={styles.editor}>
			{componentData.map(c => {
				const Component = CustomComponentMap[c.component]
				return (
					<div className={styles.wrapper} key={c.id}>
						<Component element={c} />
					</div>
				)
			})}
		</div>
	)
}

export default Editor
