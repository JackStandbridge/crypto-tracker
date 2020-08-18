import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ListPage from './ListPage';

import { getCurrencyList } from '../../data/reducer';


const ListPageContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrencyList());
	}, [dispatch]);

	return (
		<ListPage />
	);
};

export default ListPageContainer;