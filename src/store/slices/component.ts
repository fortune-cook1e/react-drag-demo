import { IComponentData } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface IComponent {
	componentData: IComponentData[]
}

const initialState: IComponent = {
	componentData: []
}

export const componentSlice = createSlice({
	name: 'component',
	initialState,
	reducers: {
		addComponent: (state, action: PayloadAction<IComponentData>) => {
			state.componentData = [...state.componentData, action.payload]
		}
	}
})

export const { addComponent } = componentSlice.actions

export const componentSelector = (state: RootState) => state.component

export default componentSlice.reducer
