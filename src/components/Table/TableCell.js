import React from 'react';
import { Link } from 'react-router-dom';

const TableCell = ({ value, element, className, link }) => {
	return element === 'th'
		? <th className={ className }>{ value }</th>
		: <td className={ className }><Link to={ link }>{ value }</Link></td>
};

export default TableCell;

TableCell.defaultProps = {
	element: 'td',
	className: '',
	link: ''
};