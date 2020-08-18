import React from 'react';

const RankIndicator = ({ rank }) => {
	return (
		<div>
			Rank <span>{ rank }</span>
		</div>
	);
};

export default RankIndicator;

RankIndicator.defaultProps = {
	rank: 0
};