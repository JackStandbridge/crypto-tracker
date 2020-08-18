import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import store from './data/store';

const app = (
	<Provider store={ store }>
		<App />
	</Provider>
);

const root = document.getElementById('root')

ReactDOM.render(app, root);