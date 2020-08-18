import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcon } from '../assets/back.svg'

const BackButton = () => {
	return (
		<Link to='/' aria-label='Home'>
			<BackIcon />
		</Link>
	);
};

export default BackButton;