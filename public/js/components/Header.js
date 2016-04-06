import React, { Component, PropTypes } from 'react';
import BookItemInput from './BookItemInput';

class Header extends Component {
	render() {
		return (
			<header>
				<BookItemInput placeholder="Add New Book" newBook />
			</header>
		)
	}
}

export default Header;