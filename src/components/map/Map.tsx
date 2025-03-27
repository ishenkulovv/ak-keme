'use client';

import React, { useRef } from 'react';
import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import { MapWrapper } from './MapWrapper';
import { Map } from '@2gis/mapgl/types';
import { useLenis } from 'lenis/react';

export const MapComponent = () => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const lenis = useLenis();
	useEffect(() => {
		let map: Map;
		load().then(mapglAPI => {
			map = new mapglAPI.Map('map-container', {
				center: [77.082875, 42.648599],
				zoom: 13,
				key: 'e98791bb-cc04-4066-9cfc-c841a3c7fdac',
			});
		});

		return () => map && map.destroy();
	}, []);

	useEffect(() => {
		const mapElement = mapRef.current;

		const disableLenisScroll = () => {
			if (lenis) {
				lenis.stop();
			}
		};

		const enableLenisScroll = () => {
			if (lenis) {
				lenis.start();
			}
		};

		if (mapElement) {
			mapElement.addEventListener('mouseenter', disableLenisScroll);
			mapElement.addEventListener('mouseleave', enableLenisScroll);
		}

		return () => {
			if (mapElement) {
				mapElement.removeEventListener('mouseenter', disableLenisScroll);
				mapElement.removeEventListener('mouseleave', enableLenisScroll);
			}
		};
	}, [lenis]);

	return (
		<div
			style={{ width: '100%', height: '630px', marginTop: 60 }}
			data-lenis-ignor
			ref={mapRef}
		>
			<MapWrapper />
		</div>
	);
};
