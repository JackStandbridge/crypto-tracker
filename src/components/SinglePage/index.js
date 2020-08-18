import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import SinglePage from './SinglePage';

import { getCurrencyList } from '../../data/reducer';

const SinglePageContainer = ({ id }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrencyList());
	}, [id, dispatch]);

	const currency = useSelector(
		({ currencies }) => currencies[id],
		shallowEqual
	);

	const userCurrency = useSelector(({ userCurrency }) => userCurrency);

	return (
		<SinglePage
			{ ...currency }
			userCurrency={ userCurrency }
		/>
	);
};

export default SinglePageContainer;