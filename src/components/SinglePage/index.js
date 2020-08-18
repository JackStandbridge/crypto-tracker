import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import SinglePage from './SinglePage';

import { getOneCurrency } from '../../data/reducer';

const SinglePageContainer = ({ id }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOneCurrency(id));
	}, [id, dispatch]);

	const currency = useSelector(
		({ currencies }) => currencies[id],
		shallowEqual
	);

	return (
		<SinglePage { ...currency } />
	);
};

export default SinglePageContainer;