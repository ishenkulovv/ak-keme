import global from '@/src/styles/global_styles.module.css';
import styles from './parking.module.css';
import SliderDesign from './SliderC';
import { formattedText } from '@/src/utils/formattedText';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Parking({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<section className={styles.main}>
			<div className={global.container}>
				<h2 className={styles.title}>{data.title[lang]}</h2>
				<p
					className={styles.description}
					dangerouslySetInnerHTML={{
						__html: formattedText(data.content[lang]),
					}}
				/>
			</div>
			<SliderDesign images={data.images} />
		</section>
	);
}

export default Parking;
