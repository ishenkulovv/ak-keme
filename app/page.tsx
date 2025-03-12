import {
	Approach,
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

export default function Home() {
	return (
		<div className={styles.page}>
			<Navigation />
			<Header />
			<Hero />
			<Philosophy />
			<DesignConcept />
			<GeneralPlan />
			<Infrastructure />
			<Approach />
			<Parking />
			<ConstructionProgress />
			<Documentations />
			<Contact />
			<Footer />
		</div>
	);
}
