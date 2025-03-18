/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://ak-keme.vercel.app', // Замените на ваш домен
	generateRobotsTxt: true, // Генерация robots.txt
	sitemapSize: 7000,
	changefreq: 'weekly', // Частота обновления страниц
	priority: 0.8, // Приоритет страниц
};
