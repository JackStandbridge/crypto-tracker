import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Currency from '../Currency';

import { getIcon } from '../../data/utils';

const TableCell = ({
	value,
	className,
	link,
	type,
	id,
	rank
}) => {
	const userCurrency = useSelector(({ userCurrency }) => userCurrency);

	return (
		<td className={ className }>
			<Link to={ link }>
				{ type === 'currency' &&
					<Currency
						symbol={ userCurrency }
						type='fiat'
						value={ value }
					/>
				}

				{ type === 'icon' &&
					<>
						<span>{ rank }</span>
						<img
							alt={ `${ value } logo` }
							src={ getIcon(id) }
						/>
						<span>{ value }</span>
					</>
				}

				{ type === 'percentage' &&
					<span>{ value.toFixed(2) }%</span>
				}
			</Link>
		</td>
	)
};

export default TableCell;

TableCell.defaultProps = {
	className: '',
	link: ''
};