const setCurrencyList = (state, { payload }) => {

	const { userCurrency } = state;

	payload.Data.forEach(({ RAW, CoinInfo }, rank) => {
		const id = CoinInfo.Name.toLowerCase();

		if (!state.currencies[id]) {
			state.currencies[id] = {};
		}

		if (!state.currencies[id][userCurrency]) {
			state.currencies[id][userCurrency] = {};
		}

		const currency = state.currencies[id];

		const currencyData = RAW[userCurrency];

		currency.id = id;
		currency.fullname = CoinInfo.FullName;
		currency.logo = CoinInfo.ImageUrl;
		currency.circulatingSupply = currencyData.SUPPLY;
		currency.rank = rank + 1;

		currency[userCurrency].price = currencyData.PRICE;
		currency[userCurrency].marketCap = currencyData.MKTCAP;
		currency[userCurrency].change24hr = currencyData.CHANGEPCT24HOUR;
		currency[userCurrency].volume24hr = currencyData.VOLUME24HOURTO;
	});

	const currencyIds = payload.Data
		.map(({ CoinInfo }) => CoinInfo.Name.toLowerCase());

	state.currencyIds = currencyIds;
	state.timestamp = +Date.now();
};

export default setCurrencyList;