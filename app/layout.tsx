import type { Metadata } from 'next';
import { Manrope, Great_Vibes } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/src/styles/globals.css';
import LenisWrapper from '@/src/components/lenis_wrapper/LenisWrapper';

const manrope = Manrope({
	subsets: ['latin', 'cyrillic'], // Поддержка кириллицы
	weight: ['300', '400', '500', '600', '700', '800'], // Выбираем нужные толщины
	display: 'swap', // Улучшает рендеринг
});

const great_vibes = Great_Vibes({
	subsets: ['latin', 'cyrillic'], // Поддержка кириллицы
	weight: ['400'], // Выбираем нужные толщины
	display: 'swap', // Улучшает рендеринг
});

export const metadata: Metadata = {
	title: 'Ak-Keme Issyk-Kul Resort',
	description:
		'Это современный многофункциональный центр отдыха и жилья, расположенный на живописном побережье озера Иссык-Куль. Наш центр основан на идее гармонии между природой и современным комфортом.',
	keywords: ['Ыссык-куль', 'Ыссык-кол', 'Озеро', 'дача', 'строй'],
	openGraph: {
		title: 'Ak-Keme Issyk-Kul Resort',
		description:
			'Это современный многофункциональный центр отдыха и жилья, расположенный на живописном побережье озера Иссык-Куль. Наш центр основан на идее гармонии между природой и современным комфортом.',
		url: 'https://ak-keme.vercel.app/',
		siteName: 'Ak-Keme Issyk-Kul Resort',
		images: [
			{
				url: '/images/logo.png', // Путь к картинке в публичной папке
				width: 1200,
				height: 630,
				alt: 'Ak-Keme Issyk-Kul Resort',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ak-Keme Issyk-Kul Resort',
		description:
			'Это современный многофункциональный центр отдыха и жилья, расположенный на живописном побережье озера Иссык-Куль. Наш центр основан на идее гармонии между природой и современным комфортом.',
		images: ['/images/logo.png'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' className={(manrope.className, great_vibes.className)}>
			<body>
				<LenisWrapper>{children}</LenisWrapper>

				<SpeedInsights />
			</body>
		</html>
	);
}
