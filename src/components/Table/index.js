import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';

const TableContainer = () => {
	const currencies = useSelector(({ currencies, currencyIds }) => {
		return currencyIds.map(id => currencies[id]);
	});

	return <Table rows={ currencies } />;
};

export default TableContainer;