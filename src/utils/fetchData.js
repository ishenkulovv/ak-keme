export const fetchDataTransform = async () => {
	const res = await fetch('https://back.ak-keme.kg/api/content', {
		cache: 'no-store', // 👈 Отключает кеширование
	});
	const posts = await res.json();

	return transformData(posts);
};

export const fetchData = async () => {
	const res = await fetch('https://back.ak-keme.kg/api/content', {
		cache: 'no-store', // 👈 Отключает кеширование
	});
	const posts = await res.json();

	return posts;
};

export const transformData = posts => {
	return {
		header_kg: { ...posts.header, title: posts.header.text?.kg },
		header_ru: { ...posts.header, title: posts.header.text?.ru },

		hero_kg: {
			...posts.hero,
			title: posts.hero.title.kg,
			content: posts.hero.content.kg,
			slider_images: posts.hero.slider_images,
		},
		hero_ru: {
			...posts.hero,
			title: posts.hero.title.ru,
			content: posts.hero.content.ru,
			slider_images: posts.hero.slider_images,
		},

		writer_kg: {
			...posts.writer,
			content: posts.writer.content.kg,
			phrase: posts.writer.phrase.kg,
			phrase_source: posts.writer.phrase_source.kg,
			slider_images: posts.writer.slider_images,
		},
		writer_ru: {
			...posts.writer,
			content: posts.writer.content.ru,
			phrase: posts.writer.phrase.ru,
			phrase_source: posts.writer.phrase_source.ru,
			slider_images: posts.writer.slider_images,
		},

		philosophy_kg: posts.philosophy.slider.map(slide => ({
			...slide,
			title: slide.title.kg,
			content: slide.content.kg,
		})),
		philosophy_ru: posts.philosophy.slider.map(slide => ({
			...slide,
			title: slide.title.ru,
			content: slide.content.ru,
		})),

		nature_kg: {
			...posts.nature,
			title: posts.nature.title.kg,
			content: posts.nature.content.kg,
			slider_images: posts.nature.slider_images,
		},
		nature_ru: {
			...posts.nature,
			title: posts.nature.title.ru,
			content: posts.nature.content.ru,
			slider_images: posts.nature.slider_images,
		},

		geoplan_kg: { ...posts.geoplan, title: posts.geoplan.title.kg },
		geoplan_ru: { ...posts.geoplan, title: posts.geoplan.title.ru },

		infrastructure_kg: {
			...posts.infrastructure,
			title: posts.infrastructure.title.kg,
			content: posts.infrastructure.content.kg,
		},
		infrastructure_ru: {
			...posts.infrastructure,
			title: posts.infrastructure.title.ru,
			content: posts.infrastructure.content.ru,
		},

		apartments_kg: posts.apartments.map(apartment => ({
			...apartment,
			title: apartment.title.kg,
			content: apartment.content.kg,
		})),
		apartments_ru: posts.apartments.map(apartment => ({
			...apartment,
			title: apartment.title.ru,
			content: apartment.content.ru,
		})),

		yard_kg: {
			...posts.yard,
			title: posts.yard.title.kg,
			content: posts.yard.content.kg,
		},
		yard_ru: {
			...posts.yard,
			title: posts.yard.title.ru,
			content: posts.yard.content.ru,
		},

		entrance_kg: {
			...posts.entrance,
			title: posts.entrance.title.kg,
			content: posts.entrance.content.kg,
		},
		entrance_ru: {
			...posts.entrance,
			title: posts.entrance.title.ru,
			content: posts.entrance.content.ru,
		},

		parking_kg: {
			...posts.parking,
			title: posts.parking.title.kg,
			content: posts.parking.content.kg,
		},
		parking_ru: {
			...posts.parking,
			title: posts.parking.title.ru,
			content: posts.parking.content.ru,
		},

		documentation_kg: posts.documentations.map(doc => ({
			...doc,
			title: doc.title.kg,
		})),
		documentation_ru: posts.documentations.map(doc => ({
			...doc,
			title: doc.title.ru,
		})),

		contact_kg: {
			...posts.contact,
			title: posts.contact.title.kg,
			content: posts.contact.content.kg,
			open_time_text: posts.contact.open_time_text.kg,
		},
		contact_ru: {
			...posts.contact,
			title: posts.contact.title.ru,
			content: posts.contact.content.ru,
			open_time_text: posts.contact.open_time_text.ru,
		},

		translations_kg: Object.fromEntries(
			Object.entries(posts.translations).map(([key, value]) => [key, value.kg])
		),

		translations_ru: Object.fromEntries(
			Object.entries(posts.translations).map(([key, value]) => [key, value.ru])
		),
	};
};
