import React from 'react';
import position from '../SinglePage/SinglePage.module.scss';
import stylesheet from './RankIndicator.module.scss';

const RankIndicator = ({ rank }) => {
	return (
		<div className={ position.ranking }>
			Rank <span className={ stylesheet.rank }>{ rank }</span>
		</div>
	);
};

export default RankIndicator;

RankIndicator.defaultProps = {
	rank: 0
};