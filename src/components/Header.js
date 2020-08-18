import React from 'react';
import CurrencyPicker from './CurrencyPicker';

const Header = ({ children }) => {
	return (
		<header>
			{ children }
			<CurrencyPicker />
		</header>
	);
};

export default Header;