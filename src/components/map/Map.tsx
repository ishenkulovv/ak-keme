'use client';

import React from 'react';
import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import { MapWrapper } from './MapWrapper';
import { Map } from '@2gis/mapgl/types';

export const MapComponent = () => {
	useEffect(() => {
		let map: Map;
		load().then(mapglAPI => {
			map = new mapglAPI.Map('map-container', {
				center: [77.082875, 42.648599],
				zoom: 13,
				key: 'e98791bb-cc04-4066-9cfc-c841a3c7fdac',
			});
		});

		// Удаляем карту при размонтировании компонента
		return () => map && map.destroy();
	}, []);

	return (
		<div
			style={{ width: '100%', height: '630px', marginTop: 60 }}
			data-lenis-ignor
		>
			<MapWrapper />
		</div>
	);
};
