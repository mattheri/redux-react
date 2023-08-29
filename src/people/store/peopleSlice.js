import { createSlice } from '@reduxjs/toolkit'
import reducers from './peopleReducers';

export const peopleSlice = createSlice({
	name: 'people',
	initialState: {
		people: []
	},
	reducers: reducers,
});

export const { updatePeople } = peopleSlice.actions;

export default peopleSlice.reducer;
