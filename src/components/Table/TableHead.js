import React from 'react';

import TableCell from './TableCell';

const TableHead = ({ columns }) => {
	return (
		<thead>
			<tr>
				{ columns.map(col => (
					<TableCell
						value={ col }
						element='th'
					/>
				)) }
			</tr>
		</thead>
	);
};

export default TableHead;

TableHead.defaultProps = {
	columns: [
		'cryptocurrency',
		'price',
		'market cap',
		'24h change'
	],
};