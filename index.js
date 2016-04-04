import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './public/js/containers/App';
import configStore from './public/js/store/configStore';

const $el = document.getElementById('wrapper');
const store = configStore();

console.log("START!!")
console.log(store)

render( 
	<Provider store={store}>
		<App />
	</Provider>, $el
)