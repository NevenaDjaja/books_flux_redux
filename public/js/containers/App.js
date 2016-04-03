import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';

class App extends Component {
	render() {
		const {books} = this.props;

		return (
			<div>
				<MainSection books={ books } />
			</div>
		)
	} 
}

export default App;