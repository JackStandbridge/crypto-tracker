import React from 'react';

import { getIcon } from '../data/utils';

const Avatar = ({ name, id }) => {
	return (
		<div>
			<img src={ getIcon(id) } alt={ `${ name } logo` } />
			<span>{ name }</span>
			<span>{ id }</span>
		</div>
	);
};

export default Avatar;

Avatar.defaultProps = {
	name: 'Bitcoin',
	id: 'btc'
};