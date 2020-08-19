import React from 'react';
import { useDispatch } from 'react-redux';

import { setSortOrder } from '../../data/reducer';
import stylesheet from './Table.module.scss';

const TableHead = ({ columns }) => {
	const dispatch = useDispatch();

	const handleClick = col => {
		dispatch(setSortOrder(col));
	};

	return (
		<thead className={ stylesheet.head }>
			<tr>
				{ columns.map(col => (
					<th
						className={ stylesheet.th }
						key={ col }
					>
						<div
							className={ stylesheet.cell }
							onClick={ () => handleClick(col) }
						>
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