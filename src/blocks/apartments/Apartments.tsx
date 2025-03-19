import global from '@/src/styles/global_styles.module.css';
import styles from './apartments.module.css';
import Slider from './Slider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Apartments({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<section className={styles.main}>
			<div className={global.container}>
				<h2 className={styles.title}>{data.apartments[lang]}</h2>
			</div>
			<div className={styles.slider}>
				<Slider data={data.apartments_a} lang={lang} />
			</div>
		</section>
	);
}

export default Apartments;
