import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface IComponent {
	name: string
}

const initialState: IComponent = {
	name: 'current'
}

export const componentSlice = createSlice({
	name: 'component',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		}
	}
})

export const { setName } = componentSlice.actions

export const componentSelector = (state: RootState) => state

export default componentSlice.reducer
