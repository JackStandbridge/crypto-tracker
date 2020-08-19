import React from 'react';

import Header from '../Header';
import BackButton from '../BackButton/BackButton';
import Avatar from '../Avatar/Avatar';
import Currency from '../Currency/Currency';
import RankIndicator from '../RankIndicator/RankIndicator';

import stylesheet from './SinglePage.module.scss';

const SinglePage = ({
	id,
	rank,
	logo,
	price,
	fullname,
	marketCap,
	volume24hr,
	circulatingSupply,
	userCurrency,
}) => {

	const sections = [
		{
			title: 'Market Cap',
			value: marketCap,
			type: 'fiat',
			symbol: userCurrency,
			position: 'topleft',
		},
		{
			title: '24h Volume',
			value: volume24hr,
			type: 'fiat',
			symbol: userCurrency,
			position: 'topright',
		},
		{
			title: 'Circulating Supply',
			value: circulatingSupply,
			type: 'crypto',
			symbol: id,
			position: 'bottomleft',
		},
	];

	return (
		<>
			<Header>
				<BackButton />

				<Avatar
					name={ fullname }
					id={ id }
					logo={ logo }
				/>

				<div className={ stylesheet.price }>
					<Currency
						symbol={ userCurrency }
						type='fiat'
						value={ price }
					/>
				</div>

			</Header>

			<div className={ stylesheet.background }>
				<main className={ stylesheet.main }>

					<RankIndicator rank={ rank } />

					{ sections.map(section => (
						<section
							key={ section.title }
							className={ stylesheet[section.position] }
						>
							<h2 className={ stylesheet.title }>{ section.title }</h2>

							<Currency
								decimals={ 0 }
								className={ stylesheet.figure }
								symbolClass={ stylesheet.symbol }
								symbol={ section.symbol }
								type={ section.type }
								value={ section.value }
							/>
						</section>
					)) }

				</main>
			</div>
		</>
	);
};

export default SinglePage;

SinglePage.defaultProps = {
	fullname: 'CURRENCY_NAME',
	id: 'CURRENCY_ID',
	price: 0,
	marketCap: 0,
	volume24hr: 0,
	circulatingSupply: 0,
	rank: 0,
	userCurrency: 'USER_CURRENCY_SYMBOL',
}