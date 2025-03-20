'use client';

import React from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

export default function LenisWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	useLenis(() => {
		// Функция вызывается при каждом событии скролла (например, анимации или эффекты)
	});

	React.useEffect(() => {
		const ignoreScrollElements = document.querySelectorAll(
			'[data-lenis-ignore]'
		);

		ignoreScrollElements.forEach(el => {
			el.addEventListener('wheel', e => e.stopPropagation(), {
				passive: false,
			});
			el.addEventListener('touchmove', e => e.stopPropagation(), {
				passive: false,
			});
		});

		return () => {
			ignoreScrollElements.forEach(el => {
				el.removeEventListener('wheel', e => e.stopPropagation());
				el.removeEventListener('touchmove', e => e.stopPropagation());
			});
		};
	}, []);

	return <ReactLenis root>{children}</ReactLenis>;
}
