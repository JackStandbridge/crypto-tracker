import { createReducer, createAction } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const setCurrencyList = createAction('setCurrencyList');
const loading = createAction('loading');
export const setUserCurrency = createAction('setUserCurrency');
export const setSortOrder = createAction('setSortOrder');

const reducer = createReducer(initialState, {
	[setCurrencyList]: reducers.setCurrencyList,
	[setUserCurrency]: reducers.setUserCurrency,
	[setSortOrder]: reducers.setSortOrder,
	[loading]: (state, { payload }) => {
		state.loading = payload;
	}
});

export default reducer;

export const getCurrencyList = () => async (dispatch, getState) => {
	const { userCurrency, currencies } = getState();

	const loadingForFirstTime =
		Object.keys(currencies).length === 0
		|| !Object.values(currencies)[0][userCurrency];

	if (loadingForFirstTime) {
		dispatch(loading(true));
	}

	const base = process.env.REACT_APP_API_BASE;
	const route = 'top/mktcapfull?limit=10&tsym=';

	const url = `${ base }${ route }${ userCurrency }`;

	const response = await fetch(url);
	const json = await response.json();

	dispatch(setCurrencyList(json));
	dispatch(loading(false));
}