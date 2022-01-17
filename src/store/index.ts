import { configureStore } from '@reduxjs/toolkit'
import component from './slices/component'

export const store = configureStore({
	reducer: {
		component
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
