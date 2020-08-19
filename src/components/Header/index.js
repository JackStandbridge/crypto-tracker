import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';

const HeaderContainer = ({ children }) => {
	const timestamp = useSelector(({ timestamp }) => timestamp);

	const [lastFetch, setLastFetch] = useState(0);

	useEffect(() => {

		const updateTime = () => {
			const now = +Date.now();
			const difference = now - timestamp;
			const inSeconds = difference / 1000;
			const lastFetch = Math.round(inSeconds);
			setLastFetch(lastFetch);
		}

		const interval = setInterval(updateTime, 1000);
		updateTime();

		return () => {
			clearInterval(interval);
		};

	}, [setLastFetch, timestamp])

	return (
		<Header
			lastFetch={ lastFetch }
		>{ children }</Header>
	);
};

export default HeaderContainer;