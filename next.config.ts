import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'back.ak-keme.kg', // 👈 Добавляем нужный хост
				pathname: '/storage/**', // 👈 Путь к изображениям
			},
		],
	},
};

export default nextConfig;
