'use client';

import { ReactLenis, useLenis } from 'lenis/react';

export default function LenisWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	useLenis(() => {
		// Функция вызывается при каждом событии скролла (например, анимации или эффекты)
	});

	return <ReactLenis root>{children}</ReactLenis>;
}
