import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CurrencyPicker from './CurrencyPicker';

import { setUserCurrency } from '../../data/reducer';

const CurrencyPickerContainer = () => {
	const dispatch = useDispatch();

	const userCurrency = useSelector(({ userCurrency }) => userCurrency);

	const currencies = [
		'USD',
		'GBP',
		'EUR',
		'JPY',
		'KRW',
	];

	const handleChange = e => {
		dispatch(setUserCurrency(e.currentTarget.value));
	};

	return (
		<CurrencyPicker
			options={ currencies }
			value={ userCurrency }
			handleChange={ handleChange }
		/>
	);
};

export default CurrencyPickerContainer;