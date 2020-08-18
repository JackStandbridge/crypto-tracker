import React from 'react';

import TableTd from './TableTd';

const TableBody = ({ rows }) => {
	return (
		<tbody>
			{ rows.map(row => {

				const cells = [
					{
						value: row.fullname,
						type: 'icon',
						logo: row.logo,
						rank: row.rank,
					},
					{
						value: row.price,
						type: 'currency'
					},
					{
						value: row.marketCap,
						type: 'currency'
					},
					{
						value: row.change24hr,
						type: 'percentage',
					},
				];

				return (
					<tr key={ row.id }>
						{ cells.map((cell, i) => (
							<TableTd
								key={ i }
								{ ...cell }
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