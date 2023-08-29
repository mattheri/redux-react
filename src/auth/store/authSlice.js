import { createSlice } from '@reduxjs/toolkit'
import reducers from './authReducers';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: "",
			email: "",
			id: "",
		},
	},
	reducers: reducers,
});

export const { updateEmail, updateName, updateWholeUser } = authSlice.actions;

export default authSlice.reducer;
