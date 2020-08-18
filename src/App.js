import React from 'react';

import CurrencyPicker from './components/CurrencyPicker';
import Loading from './components/Loading';
import Table from './components/Table';

const App = () => {
	return (
		<>
			<CurrencyPicker />
			<Loading />
			<Table />
		</>
	);
};

export default App;