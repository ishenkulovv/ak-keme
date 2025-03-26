import React from 'react';

export const MapWrapper = React.memo(
	() => {
		return (
			<div
				id='map-container'
				style={{ width: '100%', height: '630px' }}
				data-lenis-ignor
			></div>
		);
	},
	() => true
);

MapWrapper.displayName = 'MapWrapper';
