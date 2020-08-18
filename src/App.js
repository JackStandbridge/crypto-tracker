import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import ListPage from './components/ListPage';
import SinglePage from './components/SinglePage';

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/'>
				<ListPage />
			</Route>

			<Route exact path='/:id' render={ ({ match }) => (
				<SinglePage id={ match.params.id } />
			) } />
		</Switch>
	</Router>
);

export default App;