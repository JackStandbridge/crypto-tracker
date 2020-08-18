const setOneCurrency = (state, { payload }) => {
	const { userCurrency } = state;
	const { id } = payload;

	if (!state.currencies[id]) {
		state.currencies[id] = {};
	}

	const currencyData = payload.RAW[id.toUpperCase()][userCurrency];

	const currency = state.currencies[id];

	currency.id = id;

	// currency.fullname = CoinInfo.FullName;

	currency.price = currencyData.PRICE;
	currency.marketCap = currencyData.MKTCAP;
	currency.change24hr = currencyData.CHANGEPCT24HOUR;
	currency.volume24hr = currencyData.VOLUME24HOUR;
	currency.circulatingSupply = currencyData.SUPPLY;
	// currency.rank = rank + 1;
};

export default setOneCurrency;