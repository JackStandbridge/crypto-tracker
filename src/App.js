import React from 'react';

import CurrencyPicker from './components/CurrencyPicker';
import Loading from './components/Loading';
import Table from './components/Table';
import BackButton from './components/BackButton';
import RankIndicator from './components/RankIndicator';
import Header from './components/Header';
import Currency from './components/Currency';
import Avatar from './components/Avatar';

const App = () => {
	return (
		<>
			<CurrencyPicker />
			<Loading />
			<Table />
			<BackButton />
			<RankIndicator />
			<Header />
			<Currency />
			<Avatar />
		</>
	);
};

export default App;