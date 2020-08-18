import React from 'react';

import Table from '../Table';
import Header from '../Header';

const ListPage = () => {
	return (
		<>
			<Header>
				<h1>VFCrypto</h1>
			</Header>
			<main>
				<Table />
			</main>
		</>
	);
};

export default ListPage;