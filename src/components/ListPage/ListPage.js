import React from 'react';

import Table from '../Table';
import Header from '../Header';

import stylesheet from './ListPage.module.scss';

const ListPage = () => (
	<>
		<Header>
			<h1 className={ stylesheet.logo }>VFCrypto</h1>
		</Header>
		<main>
			<Table />
		</main>
	</>
);

export default ListPage;