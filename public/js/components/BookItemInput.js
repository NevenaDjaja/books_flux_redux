import React, { Component, PropTypes } from 'react';

class BookItemInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			title: this.props.title || '',
			author: this.props.author || ''
		}
	}

	handleTitleChange(e) {
		if (e.target.value.length !== 0) {
			this.setState({ title: e.target.value });
		}
	}

	handleAuthorChange(e) {
		if (e.target.value.length !== 0) {
			this.setState({ author: e.target.value });
		}
	}

	handleSubmit(e) {
		const title = this.state.title;
		const author = this.state.author;
		if (title && author) {
			this.props.onSave(title, author);
		}
	}

	render() {
		if (this.props.newBook) {
			return (
				<p>
					<label htmlFor="title">Title: </label>
					<input id="title" type="text" onChange={this.handleTitleChange.bind(this)} /> &nbsp;&nbsp;
					<label htmlFor="author">Author: </label>
					<input id="author" type="text" onChange={this.handleAuthorChange.bind(this)} /> &nbsp;&nbsp;
					<input type="submit" value="Save" onClick={this.handleSubmit.bind(this)} />
				</p>
			)

			} else {
			return (
					<p>
					<strong>{this.state.title}</strong> by <span>{this.state.author}</span>
					</p>
					);
			}
	}
}

export default BookItemInput