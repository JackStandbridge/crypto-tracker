import React from 'react';

import stylesheet from './Currency.module.scss';

const currencySymbols = {
	'USD': '$',
	'GBP': '£',
	'EUR': '€',
	'JPY': '¥',
	'KRW': '₩',
}

const Currency = ({
	symbol,
	symbolClass,
	type,
	value,
	decimals,
	className
}) => {

	const fiatClasses = [
		stylesheet.fiatSymbol,
		symbolClass ?? ''
	].join(' ');

	return (
		<>
			{ type === 'fiat' &&
				<span className={ fiatClasses }>{ currencySymbols[symbol] }</span>
			}

			<span className={ className }>{ value.toLocaleString(undefined, {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals,
			}) }</span>

			{ type === 'crypto' &&
				<span className={ stylesheet.cryptoSymbol }>{ symbol }</span>
			}
		</>
	);
};

export default Currency;

Currency.defaultProps = {
	symbol: '$',
	type: 'fiat',
	value: 0,
	className: '',
};