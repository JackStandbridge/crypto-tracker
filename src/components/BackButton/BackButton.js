import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcon } from '../../assets/back.svg'

import stylesheet from './BackButton.module.scss';

const BackButton = () => {
	return (
		<Link
			to='/'
			aria-label='Home'
			className={ stylesheet.link }
		>
			<BackIcon className={ stylesheet.icon } />
		</Link>
	);
};

export default BackButton;