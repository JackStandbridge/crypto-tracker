import React from 'react';

const Avatar = ({ name, id, logo }) => {
	return (
		<div>
			<img src={ `https://www.cryptocompare.com/${ logo }` } alt={ `${ name } logo` } />
			<span>{ name }</span>
			<span>{ id }</span>
		</div>
	);
};

export default Avatar;

Avatar.defaultProps = {
	name: 'CURRENCY_NAME',
	id: 'CURRENCY_ID'
};