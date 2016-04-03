import React, { Component, PropTypes } from 'react';

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
			<li><strong>{ book.title }</strong> by { book.author }</li>
		)
	}
}

export default BookItem;