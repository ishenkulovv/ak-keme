export const convertYouTubeLinkToEmbed = url => {
	try {
		const urlObj = new URL(url);
		const videoId = urlObj.searchParams.get('v'); // Получаем ID видео
		const params = urlObj.searchParams;

		// Формируем строку параметров (например, ?si=7sWW7p4dPNELQDu7)
		const paramString = params.has('si') ? `?si=${params.get('si')}` : '';

		if (videoId) {
			return `https://www.youtube.com/embed/${videoId}${paramString}`;
		}

		throw new Error('Некорректная ссылка на видео');
	} catch (error) {
		console.error('Ошибка при преобразовании ссылки:', error);
		return null;
	}
};
