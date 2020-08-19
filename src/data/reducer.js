import { createReducer, createAction } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const setCurrencyList = createAction('setCurrencyList');
export const setUserCurrency = createAction('setUserCurrency');

const reducer = createReducer(initialState, {
	[setCurrencyList]: reducers.setCurrencyList,
	[setUserCurrency]: reducers.setUserCurrency,
});

export default reducer;

export const getCurrencyList = () => async (dispatch, getState) => {
	const { userCurrency } = getState();
	const base = process.env.REACT_APP_API_BASE;
	const route = 'top/mktcapfull?limit=10&tsym=';

	const url = `${ base }${ route }${ userCurrency }`;

	const response = await fetch(url);
	const json = await response.json();

	dispatch(setCurrencyList(json));
}