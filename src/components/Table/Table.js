import React from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';
import Loading from '../Loading/Loading';

import stylesheet from './Table.module.scss';

const Table = ({ rows, loading }) => {
	return (
		<>
			{ loading && <Loading /> }
			<table className={ stylesheet.table }>
				<TableHead />
				<TableBody rows={ rows } />
			</table>
		</>
	);
};

export default Table;