import React from 'react';

const Currency = ({ symbol, type, value }) => {
	return (
		<>
			{ type === 'fiat' &&
				<span>{ symbol }</span>
			}

			{ value }

			{ type === 'crypto' &&
				<span>{ symbol }</span>
			}
		</>
	);
};

export default Currency;

Currency.defaultProps = {
	symbol: '$',
	type: 'fiat',
	value: 0,
}