import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface FilterState {
    value: boolean
}

const initialState: FilterState = {
    value: false,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    },
})


export const { setFilter } = filterSlice.actions
export default filterSlice.reducer