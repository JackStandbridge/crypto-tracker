import React from 'react';
import stylesheet from './SinglePage/SinglePage.module.scss';

const RankIndicator = ({ rank }) => {
	return (
		<div className={ stylesheet.ranking }>
			Rank <span>{ rank }</span>
		</div>
	);
};

export default RankIndicator;

RankIndicator.defaultProps = {
	rank: 0
};