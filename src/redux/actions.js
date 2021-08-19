import { ADD_USER, ADD_VALUE, DELETE_USER } from './types';

export const addUser = (user) => (dispatch) => {
	//
	//
	dispatch({
		type: ADD_USER,
		payload: user
	});
};

export const deleteUser = (email) => (dispatch) => {
	//
	//
	dispatch({
		type: DELETE_USER,
		payload: email
	});
};
