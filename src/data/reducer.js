import { createReducer, createAction } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const setCurrencyList = createAction('setCurrencyList');
const setOneCurrency = createAction('setOneCurrency');

const reducer = createReducer(initialState, {
	[setCurrencyList]: reducers.setCurrencyList,
	[setOneCurrency]: reducers.setOneCurrency,
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

export const getOneCurrency = id => async (dispatch, getState) => {
	const { userCurrency } = getState();
	const base = process.env.REACT_APP_API_BASE;
	const fromSymbol = `fsyms=${ id }`;
	const toSymbol = `tsyms=${ userCurrency }`;
	const route = 'pricemultifull?';

	const url = `${ base }${ route }${ fromSymbol }&${ toSymbol }`;

	console.log(url);

	const response = await fetch(url);
	const json = await response.json();

	dispatch(setOneCurrency({ ...json, id  }));
}