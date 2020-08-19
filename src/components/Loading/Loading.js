import React from 'react';
import loading from '../../assets/loading.gif';
import stylesheet from './Loading.module.scss';

const Loading = () => {
	return (
		<img
			alt='loading'
			src={ loading }
			className={ stylesheet.loading }
		/>
	);
};

export default Loading;