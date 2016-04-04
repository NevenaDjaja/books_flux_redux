import { combineReducers } from 'redux';

const initState = [{
	title: 'Placeholder book',
	author: 'Anonymus',
	id: 1
}];

function books(state = initState, action) {
	switch (action.type) {
		case 'test':
			return state;
		default:
			return state;
	}

}


const mainReducer = combineReducers({
	books
})

export default mainReducer;