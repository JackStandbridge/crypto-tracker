import React from 'react';

import stylesheet from './CurrencyPicker.module.scss';

const CurrencyPicker = ({ options, value, handleChange }) => {
	return (
		<>
			<select
				className={ stylesheet.select }
				onChange={ handleChange }
				value={ value }
			>

				{ options.map(currency => (
					<option
						value={ currency }
						key={ currency }
					>
						{ currency }
					</option>
				)) }

			</select>
		</>
	);
};

export default CurrencyPicker;

CurrencyPicker.defaultProps = {
	options: [
		'USD',
		'GBP',
		'EUR',
		'JPY',
		'KRW',
	],
	value: 'USD',
};