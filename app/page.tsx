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
import styles from './page.module.css';
import { Navigation } from '@/src/components';
import { fetchData } from '@/src/utils/fetchData';

const optionsLang = [
	{
		value: 'ru',
		label: 'RU',
	},
	{
		value: 'kg',
		label: 'KG',
	},
];
export default async function Home() {
	const data = await fetchData();

	return (
		<div className={styles.page}>
			<Navigation options={optionsLang} data={data.translations} />
			<Header data={data.header} />
			<Hero data={{ ...data.hero, writer: data.writer }} />
			<Philosophy data={data.philosophy} />
			<DesignConcept data={data.nature} />
			<GeneralPlan data={data.geoplan} />
			<Infrastructure data={data.infrastructure} />
			<Apartments
				data={{ apartments_a: data.apartments, ...data.translations }}
			/>
			<Backyards data={data.yard} />
			<Approach data={data.entrance} />
			<Parking data={data.parking} />
			<ConstructionProgress
				data={{
					...data.translations,
					construction_progresses: data.construction_progresses,
				}}
			/>
			<Documentations
				data={{
					documentations: [...data.documentations],
					...data.translations,
				}}
			/>
			<Contact data={{ ...data.translations, ...data.contact }} />
			<Footer data={{ ...data.translations, ...data.contact }} />
		</div>
	);
}
