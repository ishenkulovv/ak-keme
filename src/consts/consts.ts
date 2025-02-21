import { IFooterSection } from '../types/footer';

export const footerProjectList: IFooterSection = {
	title: 'О проекте',
	links: [
		{ title: 'Концепция', href: '/project/concept' },
		{ title: 'Философия', href: '/project/philosophy' },
		{ title: 'Архитектура', href: '/project/architecture' },
		{ title: 'Генплан', href: '/project/master-plan' },
		{ title: 'Инфраструктура', href: '/project/infrastructure' },
	],
};

export const footerResortList: IFooterSection = {
	title: 'Курорт',
	links: [
		{ title: 'Квартиры', href: '/resort/apartments' },
		{ title: 'Дворы', href: '/resort/yards' },
		{ title: 'Подъезды', href: '/resort/entrances' },
		{ title: 'Паркинг', href: '/resort/parking' },
		{ title: 'Ход строительства', href: '/resort/construction-progress' },
	],
};

export const footerCompanyList: IFooterSection = {
	title: 'Компания',
	links: [
		{ title: 'Документация', href: '/company/documents' },
		{ title: 'Контакты', href: '/company/contacts' },
	],
};
