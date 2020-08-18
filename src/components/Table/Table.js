import React from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ rows }) => {
	return (
		<table>
			<TableHead />
			<TableBody rows={ rows } />
		</table>
	);
};

export default Table;