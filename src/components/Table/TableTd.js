import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Currency from '../Currency/Currency';

import stylesheet from './Table.module.scss';

const TableCell = ({
	value,
	link,
	type,
	logo,
	rank,
	decimals,
}) => {

	const userCurrency = useSelector(({ userCurrency }) => userCurrency);

	return (
		<td className={ stylesheet.td }>
			<Link
				className={ stylesheet.link }
				to={ link }
			>
				{ type === 'icon' &&
					<div className={ stylesheet.iconCell }>
						<span className={ stylesheet.rank }>{ rank }</span>
						<img
							alt={ `${ value } logo` }
							src={ `https://www.cryptocompare.com/${ logo }` }
						/>
						<span>{ value }</span>
					</div>
				}

				{ type === 'currency' &&
					<div className={ stylesheet.cell }>
						<Currency
							symbol={ userCurrency }
							type='fiat'
							value={ value }
							decimals={ decimals }
						/>
					</div>
				}

				{ type === 'percentage' &&
					<div className={ stylesheet[ `percentageCell${ value < 0 ? 'Fall' : 'Rise' }`] }>
						<span>{ value.toFixed(2) }%</span>
					</div>
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