import { ADD_USER, DELETE_USER } from './types';

export const usersReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case ADD_USER:
			return { ...state, users: [ ...state.users, action.payload ] };
		case DELETE_USER:
			return { ...state, users: state.users?.filter((user) => user.email !== action.payload) };

		default:
			return state;
	}
};
