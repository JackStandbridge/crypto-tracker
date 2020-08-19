import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import SinglePage from './SinglePage';

const SinglePageContainer = ({ id }) => {
	const currency = useSelector(
		({ currencies }) => currencies[id],
		shallowEqual
	);

	const userCurrency = useSelector(({ userCurrency }) => userCurrency);

	const { [userCurrency]: currencyValues, ...props } = currency || {};

	Object.assign(props, currencyValues);

	return (
		<SinglePage
			{ ...props }
			userCurrency={ userCurrency }
		/>
	);
};

export default SinglePageContainer;