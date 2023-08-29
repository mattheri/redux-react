import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../auth/store/authSlice';
import peopleReducer from '../people/store/peopleSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		people: peopleReducer,
	},
});
