import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import { usersReducer } from './usersReducer';

const store = createStore(
	combineReducers({
		users: usersReducer
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
