import React from 'react';
import { ReactComponent as BackIcon } from '../assets/back.svg'

const BackButton = () => {
	return (
		<a href='/' aria-label='Home'>
			<BackIcon />
		</a>
	);
};

export default BackButton;