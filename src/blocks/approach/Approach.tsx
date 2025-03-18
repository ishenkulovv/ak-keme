import global from '@/src/styles/global_styles.module.css';
import styles from './approach.module.css';
import { Slider } from '@/src/components';

function Approach() {
	return (
		<section className={styles.main}>
			<div className={global.container}>
				<h2 className={styles.title}>Подъезды</h2>
				<p className={styles.description}>
					Подъезды выполнены в современном стиле с акцентом на удобство.
					Просторные холлы, стильные отделочные материалы и продуманные детали
					обеспечивают комфорт при каждом входе и выходе.
				</p>
			</div>
			<div className={styles.slider}>
				<Slider id='approach-slider' slidesPerView={3} buttonPosition='side' />
			</div>
		</section>
	);
}

export default Approach;
