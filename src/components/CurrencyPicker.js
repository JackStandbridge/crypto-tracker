import React from 'react';

const CurrencyPicker = ({ currencies, handleChange }) => {
	return (
		<>
			<select
				onChange={ handleChange }
				defaultValue={ currencies[0] }
			>

				{ currencies.map(currency => (
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
	currencies: [
		'USD',
		'GBP',
		'EUR',
		'JPY',
		'KRW',
	]
}