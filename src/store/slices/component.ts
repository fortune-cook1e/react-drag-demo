import { IComponentData } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface IComponent {
	componentData: IComponentData[] // 全部组件数据
	currentComponent: IComponentData | null // 当前选择的组件
}

const initialState: IComponent = {
	componentData: [],
	currentComponent: null
}

export const componentSlice = createSlice({
	name: 'component',
	initialState,
	reducers: {
		addComponent: (state, action: PayloadAction<IComponentData>) => {
			state.componentData = [...state.componentData, action.payload]
		},
		setCurrentComponent: (
			state,
			action: PayloadAction<IComponentData | null>
		) => {
			state.currentComponent = action.payload
		},
		// 更新component
		updateCurrentComponent: (state, action: PayloadAction<IComponentData>) => {
			state.currentComponent = action.payload
			state.componentData = state.componentData.map(c => {
				if (c.id === action.payload.id) {
					return action.payload
				}
				return c
			})
		},
		deleteComponent: (state, action: PayloadAction<string>) => {
			state.componentData = state.componentData.filter(
				c => c.id !== action.payload
			)
		}
	}
})

export const {
	addComponent,
	setCurrentComponent,
	deleteComponent,
	updateCurrentComponent
} = componentSlice.actions

export const componentSelector = (state: RootState) => state.component

export default componentSlice.reducer
