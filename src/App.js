import React from 'react';

import CurrencyPicker from './components/CurrencyPicker';
import Loading from './components/Loading';
import Table from './components/Table';
import BackButton from './components/BackButton';
import RankIndicator from './components/RankIndicator';

const App = () => {
	return (
		<>
			<CurrencyPicker />
			<Loading />
			<Table />
			<BackButton />
			<RankIndicator />
		</>
	);
};

export default App;