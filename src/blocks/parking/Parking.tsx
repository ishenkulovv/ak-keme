import global from '@/src/styles/global_styles.module.css';
import styles from './parking.module.css';
import { Slider } from '@/src/components';

function Parking() {
	return (
		<section className={styles.main}>
			<div className={global.container}>
				<h2 className={styles.title}>Паркинг</h2>
				<p className={styles.description}>
					Паркинг — продуманное пространство, сочетающее стиль и
					функциональность. Дизайнерские элементы создают атмосферу уюта.
					Удобная навигация и мягкое освещение делают передвижение комфортным и
					приятным.
				</p>
			</div>
			<div className={styles.slider}>
				<Slider />
			</div>
		</section>
	);
}

export default Parking;
