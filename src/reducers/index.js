import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

const initState = [{
  title: 'Placeholder book',
  author: 'Anonymus',
  id: 1
}];

function books(state = initState, action) {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return [
        ...state, 
        {
          title: action.title,
          author: action.author,
          id: state.length + 1
        }
      ];
    case ActionTypes.EDIT_BOOK:
      return state;
    case ActionTypes.DELETE_BOOK:
      return state;
    default:
      return state;
  }

}


const mainReducer = combineReducers({
  books
})

export default mainReducer;