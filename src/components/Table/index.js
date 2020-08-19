import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';

const TableContainer = () => {
	const currencies = useSelector(({ userCurrency, currencies, currencyIds }) => {
		return currencyIds.map(id => {
			const { [userCurrency]: currencyValues, ...currency } = currencies[id];

			Object.assign(currency, currencyValues);

			return currency;
		});
	});

	const loading = useSelector(({ loading }) => loading);

	return <Table rows={ currencies } loading={ loading } />;
};

export default TableContainer;