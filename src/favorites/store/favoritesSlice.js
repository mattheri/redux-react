import { createSlice } from '@reduxjs/toolkit'
import reducers from './favoritesReducers';

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		favorites: [],
	},
	reducers: reducers,
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;