import { createReducer, createAction } from '@reduxjs/toolkit';
import initialState from './initial';
import * as reducers from './reducers';

const reducer = createReducer(initialState, {

});

export default reducer;
