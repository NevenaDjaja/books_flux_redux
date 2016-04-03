import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './public/js/containers/App';

const $el = document.getElementById('wrapper');
var books = [
	{ title: "The Slight Edge",
		author: "Jeff Olson",
		id: 1
  }, {
  	title: "The Yoga-Sutra of Patanjali",
  	author: "Chip Hartranft",
  	id: 2
	}];

render( 
	<App books={ books } />, $el
)