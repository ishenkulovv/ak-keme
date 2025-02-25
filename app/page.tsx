import {
	ConstructionProgress,
	Contact,
	Documentations,
	Footer,
	Header,
} from '@/src/blocks';
import styles from './page.module.css';
import { Navigation } from '@/src/components';

export default function Home() {
	return (
		<div className={styles.page}>
			<Navigation />
			<Header />
			<ConstructionProgress />
			<Documentations />
			<Contact />
			<Footer />
		</div>
	);
}
