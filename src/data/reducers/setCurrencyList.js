const setCurrencyList = (state, { payload }) => {

	const { userCurrency } = state;

	payload.Data.forEach(({ RAW, CoinInfo }, rank) => {
		const id = CoinInfo.Name.toLowerCase();

		if (!state.currencies[id]) {
			state.currencies[id] = {};
		}

		const currency = state.currencies[id];

		const currencyData = RAW[userCurrency];

		currency.id = id;
		currency.fullname = CoinInfo.FullName;

		currency.price = currencyData.PRICE;
		currency.marketCap = currencyData.MKTCAP;
		currency.change24hr = currencyData.CHANGEPCT24HOUR;
		currency.volume24hr = currencyData.VOLUME24HOURTO;
		currency.circulatingSupply = currencyData.SUPPLY;
		currency.rank = rank + 1;
	});

	const currencyIds = payload.Data
		.map(({ CoinInfo }) => CoinInfo.Name.toLowerCase());

	state.currencyIds = currencyIds;
};

export default setCurrencyList;