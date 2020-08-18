import React from 'react';

import CurrencyPicker from './components/CurrencyPicker';
import Loading from './components/Loading';

const App = () => {
	return (
		<>
			<CurrencyPicker />
			<Loading />
		</>
	);
};

export default App;