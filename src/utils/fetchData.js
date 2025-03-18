export const fetchData = async () => {
	const res = await fetch('https://back.ak-keme.kg/api/content');
	const posts = await res.json();
	return transformData(posts);
};

export const transformData = posts => {
	return {
		header_kg: { ...posts.header, title: posts.header.text?.kg },
		header_ru: { ...posts.header, title: posts.header.text?.ru },

		hero_kg: {
			...posts.hero,
			title: posts.hero.title.kg,
			content: posts.hero.content.kg,
		},
		hero_ru: {
			...posts.hero,
			title: posts.hero.title.ru,
			content: posts.hero.content.ru,
		},

		writer_kg: {
			...posts.writer,
			content: posts.writer.content.kg,
			phrase: posts.writer.phrase.kg,
			phrase_source: posts.writer.phrase_source.kg,
		},
		writer_ru: {
			...posts.writer,
			content: posts.writer.content.ru,
			phrase: posts.writer.phrase.ru,
			phrase_source: posts.writer.phrase_source.ru,
		},

		nature_kg: {
			...posts.nature,
			title: posts.nature.title.kg,
			content: posts.nature.content.kg,
		},
		nature_ru: {
			...posts.nature,
			title: posts.nature.title.ru,
			content: posts.nature.content.ru,
		},

		geoplan_kg: {
			...posts.geoplan,
			title: posts.geoplan.title.kg,
		},
		geoplan_ru: {
			...posts.geoplan,
			title: posts.geoplan.title.ru,
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

		documentation_kg: {
			...posts.documentations,
			title: posts.documentations.title?.kg,
		},
		documentation_ru: {
			...posts.documentations,
			title: posts.documentations.title?.ru,
		},

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
