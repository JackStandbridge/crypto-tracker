import React from 'react';
import stylesheet from './Avatar.module.scss';

const Avatar = ({ name, id, logo }) => {
	return (
		<div className={ stylesheet.avatar }>
			<img
				src={ `https://www.cryptocompare.com/${ logo }` }
				alt={ `${ name } logo` }
				className={ stylesheet.icon }
			/>
			<span className={ stylesheet.fullname }>{ name }</span>
			<span className={ stylesheet.abbreviation }>{ id }</span>
		</div>
	);
};

export default Avatar;

Avatar.defaultProps = {
	name: 'CURRENCY_NAME',
	id: 'CURRENCY_ID'
};