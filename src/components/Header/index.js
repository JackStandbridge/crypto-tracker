import React from 'react';
import Header from './Header';

const HeaderContainer = ({ children }) => {
	return (
		<Header>{ children }</Header>
	);
};

export default HeaderContainer;