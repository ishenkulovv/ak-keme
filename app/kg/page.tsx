import {
	Apartments,
	Approach,
	Backyards,
	ConstructionProgress,
	Contact,
	DesignConcept,
	Documentations,
	Footer,
	GeneralPlan,
	Header,
	Hero,
	Infrastructure,
	Parking,
	Philosophy,
} from '@/src/blocks';
import styles from '../page.module.css';
import { Navigation } from '@/src/components';
import { fetchData } from '@/src/utils/fetchData';

const optionsLang = [
	{
		value: 'kg',
		label: 'KG',
	},
	{
		value: 'ru',
		label: 'RU',
	},
];

export default async function Home() {
	const data = await fetchData();

	console.log(data.translations, 'data.translations');

	return (
		<div className={styles.page}>
			<Navigation options={optionsLang} data={data.translations} lang='kg' />
			<Header data={data.header} lang='kg' />
			<Hero data={{ ...data.hero, writer: data.writer }} lang='kg' />
			<Philosophy data={data.philosophy} lang='kg' />
			<DesignConcept data={data.nature} lang='kg' />
			<GeneralPlan data={data.geoplan} lang='kg' />
			<Infrastructure data={data.infrastructure} lang='kg' />
			<Apartments
				data={{ apartments_a: data.apartments, ...data.translations }}
				lang='kg'
			/>
			<Backyards data={data.yard} lang='kg' />
			<Approach data={data.entrance} lang='kg' />
			<Parking data={data.parking} lang='kg' />
			<ConstructionProgress
				data={{
					...data.translations,
					construction_progresses: data.construction_progresses,
				}}
				lang='kg'
			/>
			<Documentations
				data={{
					documentations: [...data.documentations],
					...data.translations,
				}}
				lang='kg'
			/>
			<Contact data={{ ...data.translations, ...data.contact }} lang='kg' />
			<Footer data={{ ...data.translations, ...data.contact }} lang='kg' />
		</div>
	);
}
