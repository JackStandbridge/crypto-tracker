import React from 'react';

import Header from './Header';
import BackButton from './BackButton';
import Avatar from './Avatar';
import Currency from './Currency';
import RankIndicator from './RankIndicator';

const SinglePage = ({
	name,
	abbrev,
	price,
	marketCap,
	volume24hr,
	circulatingSupply,
	rank,
	userCurrency,
}) => {

	const sections = [
		{
			title: 'Market Cap',
			value: marketCap,
			type: 'fiat',
			symbol: userCurrency,
		},
		{
			title: '24h Volume',
			value: volume24hr,
			type: 'fiat',
			symbol: userCurrency,
		},
		{
			title: 'Circulating Supply',
			value: circulatingSupply,
			type: 'crypto',
			symbol: abbrev,
		},
	];

	return (
		<>
			<Header >
				<BackButton />

				<Avatar
					name={ name }
					abbrev={ abbrev }

				/>
				<Currency
					symbol={ userCurrency }
					type='fiat'
					value={ price }
				/>

			</Header>
			<main>
				<RankIndicator rank={ rank } />

				{ sections.map(section => (
					<section>
						<h2>{ section.title }</h2>
						<Currency
							symbol={ section.symbol }
							type={ section.type }
							value={ section.value }
						/>
					</section>
				))}

			</main>
		</>
	);
};

export default SinglePage;

SinglePage.defaultProps = {
	name: 'Bitcoin',
	abbrev: 'btc',
	price: 0,
	marketCap: 0,
	volume24hr: 0,
	circulatingSupply: 0,
	rank: 0,
	userCurrency: '$',
}