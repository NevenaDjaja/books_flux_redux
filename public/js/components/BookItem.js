import React, { Component, PropTypes } from 'react';
import BookItemInput from './BookItemInput';

class BookItem extends Component {
	constructor(props, context) {
		super(props, context);

		// this.state = {
		// 	editing: false
		// }
	}

	render() {
		const { book } = this.props;

		return (
			<li><BookItemInput title={book.title} author={book.author} /></li>
		);
	}
}

export default BookItem;