import React from 'react';
import stylesheet from './Avatar.module.scss';

const Avatar = ({ name, id, logo }) => {
	const logoSrc = logo ? `https://www.cryptocompare.com/${ logo }` : 'data:,';

	return (
		<div className={ stylesheet.avatar }>
			<img
				src={ logoSrc }
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
	name: '',
	id: '',
	logo: '',
};