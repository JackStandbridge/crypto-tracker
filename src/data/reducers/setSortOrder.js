const getSortVal = (currency, userCurrency, column) => {
	switch (column) {
		case 'price': return currency[userCurrency].price;
		case '24h change': return currency[userCurrency].change24hr;
		case 'market cap': return currency[userCurrency].marketCap;
		case 'cryptocurrency': return currency.fullname;
		default: return 0;
	}
}

const setSortOrder = (state, { payload }) => {
	const { userCurrency, currencyIds, currencies } = state;

	const currencyArray = currencyIds.map(id => currencies[id]);

	const newIds = currencyArray.sort((a, b) => {
		const aSortVal = getSortVal(a, userCurrency, payload);
		const bSortVal = getSortVal(b, userCurrency, payload);

		if (aSortVal > bSortVal) {
			return 1;
		} else if (bSortVal > aSortVal) {
			return -1;
		} else {
			return 0;
		}
	}).map(({ id }) => id);

	const reverseArray = JSON.stringify(currencyIds) === JSON.stringify(newIds);

	state.currencyIds = reverseArray ? newIds.reverse() : newIds;
};

export default setSortOrder;