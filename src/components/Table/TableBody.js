import React from 'react';

import TableCell from './TableCell';

const TableBody = ({ rows }) => {
	return (
		<tbody>
			{ rows.map(row => {

				const cells = [
					row.id,
					row.price,
					row.marketCap,
					row.change24hr
				];

				return (
					<tr>
						{ cells.map(cell => (
							<TableCell
								value={ cell }
								element='td'
								link={ row.id }
							/>
						)) }
					</tr>
				);
			}) }
		</tbody>
	);
};

export default TableBody;

TableBody.defaultProps = {
	rows: [
		{
			name: 'Bitcoin',
			id: 'btc',
			price: 0,
			change24hr: 0,
			marketCap: 0,
			circulatingSupply: 0,
			rank: 0,
			userCurrency: '$',
		}
	]
};