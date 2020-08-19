import React from 'react';
import CurrencyPicker from '../CurrencyPicker';

import stylesheet from './Header.module.scss';

const Header = ({ children }) => {
	return (
		<header className={ stylesheet.header }>
			<div className={ stylesheet.left }>
				{ children }
			</div>
			<CurrencyPicker />
		</header>
	);
};

export default Header;