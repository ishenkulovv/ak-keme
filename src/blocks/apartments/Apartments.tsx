import global from '@/src/styles/global_styles.module.css';
import styles from './apartments.module.css';
import Slider from './Slider';

function Apartments() {
	return (
		<section className={styles.main}>
			<div className={global.container}>
				<h2 className={styles.title}>Квартиры</h2>
			</div>
			<div className={styles.slider}>
				<Slider />
			</div>
		</section>
	);
}

export default Apartments;
