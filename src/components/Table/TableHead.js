import React from 'react';

const TableHead = ({ columns }) => {
	return (
		<thead>
			<tr>
				{ columns.map(col => <th key={ col }>{ col }</th>) }
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