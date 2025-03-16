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

export default async function Home() {
	const transformedData = await fetchData();
	return (
		<div className={styles.page}>
			<Navigation />
			<Header data={transformedData.header_ru} />
			<Hero />
			<Philosophy />
			<DesignConcept />
			<GeneralPlan />
			<Infrastructure />
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
