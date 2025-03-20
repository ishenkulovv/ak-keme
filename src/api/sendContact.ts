export const sendContactData = async (name: string, phone: string) => {
	try {
		const response = await fetch('https://back.ak-keme.kg/api/contacts', {
			method: 'POST', // 👈 Указываем метод POST
			headers: {
				'Content-Type': 'application/json', // 👈 Указываем, что отправляем JSON
			},
			body: JSON.stringify({ name, phone }), // 👈 Преобразуем данные в JSON
		});

		if (!response.ok) {
			throw new Error(`Ошибка при отправке данных: ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Ошибка при отправке данных:', error);
		throw error;
	}
};
