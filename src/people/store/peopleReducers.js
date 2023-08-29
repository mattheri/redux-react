const reducers = {
	updatePeople: (state, action) => {
		if (action.payload && action.payload.results) {
			state.people = action.payload.results;
		}

		return state;
	},
}

export default reducers;
