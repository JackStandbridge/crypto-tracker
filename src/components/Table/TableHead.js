import React from 'react';

import stylesheet from './Table.module.scss';

const TableHead = ({ columns }) => {
	return (
		<thead className={ stylesheet.head }>
			<tr>
				{ columns.map(col => (
					<th className={ stylesheet.th } key={ col }>
						<div className={ stylesheet.cell }>
							{ col }
						</div>
					</th>
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