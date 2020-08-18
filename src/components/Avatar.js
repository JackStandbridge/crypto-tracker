import React from 'react';

const Avatar = ({ name, abbrev }) => {
	return (
		<div>
			<img src={ require(`../assets/${ abbrev }-logo.svg`) } alt={ `${ name } logo` } />
			<span>{ name }</span>
			<span>{ abbrev }</span>
		</div>
	);
};

export default Avatar;

Avatar.defaultProps = {
	name: 'Bitcoin',
	abbrev: 'btc'
}