import React, { Component, PropTypes } from 'react';

class BookItemInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			title: this.props.title || '',
			author: this.props.author || ''
		}
	}

	render() {
		if (this.props.newBook) {
			return (
				<p>
					<label htmlFor="title">Title: </label><input id="title" type="text" /> &nbsp;&nbsp;
					<label htmlFor="author">Author: </label><input id="author" type="text" />
				</p>
			)

			} else {
			return (
					<p>
					<strong>{this.state.title}</strong> by <span>{this.state.author}</span>
					</p>
					);
			}
			// <input type="text" 
			// 			 placeholder={this.props.placeholder}
			// 			 value={this.state.title}/>
	}
}

export default BookItemInput