import React from 'react';

import stylesheet from './Currency.module.scss';

const currencySymbols = {
	'USD': '$',
	'GBP': '£',
	'EUR': '€',
	'JPY': '¥',
	'KRW': '₩',
}

const Currency = ({ symbol, type, value, decimals }) => {

	return (
		<>
			{ type === 'fiat' &&
				<span className={ stylesheet.fiatSymbol }>{ currencySymbols[symbol] }</span>
			}

			<span>{ value.toLocaleString(undefined, {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals,
			}) }</span>

			{ type === 'crypto' &&
				<span>{ symbol }</span>
			}
		</>
	);
};

export default Currency;

Currency.defaultProps = {
	symbol: '$',
	type: 'fiat',
	value: 0,
}