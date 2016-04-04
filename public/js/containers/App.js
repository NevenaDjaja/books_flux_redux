import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';

class App extends Component {
	render() {
		const {books} = this.props;
		console.log(this.props)
		console.log(books)

		return (
			<div>
				<MainSection books={ books } />
			</div>
		)
	} 
}

App.PropTypes = {
	books: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

export default connect(
	mapStateToProps
)(App);