import React from 'react';

import TableCell from './TableCell';

const TableBody = ({ rows }) => {
	return (
		<tbody>
			{ rows.map(row => {

				const cells = [
					row.name,
					row.price,
					row.marketCap,
					row.change24hr
				];

				return (
					<tr>
						{ cells.map(cell => (
							<TableCell
								value={ cell }
								element='th'
								link={ row.abbrev }
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
			abbrev: 'btc',
			price: 0,
			change24hr: 0,
			marketCap: 0,
			circulatingSupply: 0,
			rank: 0,
			userCurrency: '$',
		}
	]
};