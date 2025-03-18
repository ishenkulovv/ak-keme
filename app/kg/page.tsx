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
	console.log(data);
	return (
		<div className={styles.page}>
			<Navigation options={optionsLang} data={data.translations} lang='kg' />
			<Header data={data.header} lang='kg' />
			<Hero data={{ ...data.hero, writer: data.writer }} lang='kg' />
			<Philosophy data={data.philosophy} lang='kg' />
			<DesignConcept data={data.nature} lang='kg' />
			<GeneralPlan data={data.geoplan} lang='kg' />
			<Infrastructure data={data.infrastructure} lang='kg' />
			<Apartments />
			<Backyards />
			<Approach />
			<Parking />
			<ConstructionProgress />
			<Documentations />
			<Contact />
			<Footer />
		</div>
	);
}
