import React from 'react';

const TableCell = ({ value, element, className }) => {
	return element === 'th' ?
		<th className={ className }>{ value }</th>
		:
		<td className={ className }>{ value }</td>
};

export default TableCell;

TableCell.defaultProps = {
	element: 'td',
	className: ''
};