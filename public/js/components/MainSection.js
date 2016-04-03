import React, { Component, PropTypes } from 'react';

class MainSection extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { books } = this.props;

		return (
			<section>
				<ul>
				  { books.map(book => 
				  	<li key={book.id}><strong>{ book.title }</strong> by { book.author }</li>
				  )}
				</ul>
			</section>

		)
	}
}

export default MainSection