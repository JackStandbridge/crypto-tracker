import React from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';

import stylesheet from './Table.module.scss';

const Table = ({ rows }) => {
	return (
		<table className={ stylesheet.table }>
			<TableHead />
			<TableBody rows={ rows } />
		</table>
	);
};

export default Table;