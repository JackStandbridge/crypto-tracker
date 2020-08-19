import React from 'react';
import { Select } from '@material-ui/core';

import stylesheet from './CurrencyPicker.module.scss';

const CurrencyPicker = ({ options, value, handleChange }) => {
	return value && (
		<Select
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
		</Select>
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