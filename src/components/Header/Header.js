import React from 'react';
import CurrencyPicker from '../CurrencyPicker';

import stylesheet from './Header.module.scss';

const Header = ({ children, lastFetch }) => {
	return (
		<header className={ stylesheet.header }>
			<div className={ stylesheet.left }>
				{ children }
			</div>

			<span className={ stylesheet.lastFetch }>
				Last updated <time>{ lastFetch }s</time> ago
			</span>
			<CurrencyPicker />
		</header>
	);
};

export default Header;