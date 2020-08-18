import React from 'react';

const Avatar = ({ name, id }) => {
	return (
		<div>
			<img src={ require(`../assets/${ id }-logo.svg`) } alt={ `${ name } logo` } />
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