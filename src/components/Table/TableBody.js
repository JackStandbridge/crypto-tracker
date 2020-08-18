import React from 'react';

import TableCell from './TableCell';

const TableBody = ({ rows }) => {
	return (
		<tbody>
			{ rows.map(row => (
				<tr>
					{ row.map(cell => (
						<TableCell
							value={ cell }
							element='th'
						/>
					))}
				</tr>
			)) }
		</tbody>
	);
};

export default TableBody;

TableBody.defaultProps = {
	rows: []
};