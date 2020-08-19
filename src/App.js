import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import ListPage from './components/ListPage/ListPage';
import SinglePage from './components/SinglePage';

import { getCurrencyList } from './data/reducer';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrencyList());
	}, [dispatch]);

	setInterval(() => {
		dispatch(getCurrencyList());
	}, 60000);

	return (
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
}

export default App;