export const getIcon = id => {
	try {
		return require(`../assets/${ id }-logo.svg`);
	} catch (e) {
		return '';
	}
};