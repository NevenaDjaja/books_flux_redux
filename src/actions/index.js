import ActionTypes from '../constants/ActionTypes';

export function addBook(title, author) {
	return { type: ActionTypes.ADD_BOOK, title, author }
}

export function editBook(title, author) {
	return { type: ActionTypes.EDIT_BOOK, title, author }
}