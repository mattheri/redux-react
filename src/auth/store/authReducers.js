const reducers = {
	updateEmail: (state, action) => {
		state.user = {
			...state.user,
			email: action.payload
		}
	},
	updateName: (state, action) => {
		state.user = { ...state.user, name: action.payload }
	},
	updateWholeUser: (state, action) => {
		const id = state.id + 1;
		state.user = { id: id, ...action.payload };
	}
}

export default reducers;
