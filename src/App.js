import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
	const userCurrency = useSelector(({ userCurrency }) => userCurrency);

	const [, setIntervalId] = useState(null);

	useEffect(() => {

		dispatch(getCurrencyList());

		const interval = setInterval(() => {
			dispatch(getCurrencyList());
		}, 60000);

		setIntervalId(prevId => {
			clearInterval(prevId);
			return interval;
		});

	}, [dispatch, userCurrency]);

	useEffect(() => {
		return () => {
			setIntervalId(prevId => {
				clearInterval(prevId);
				return null;
			});
		}
	}, [])


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