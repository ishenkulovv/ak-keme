import global from '@/src/styles/global_styles.module.css';
import styles from './backyards.module.css';
import Slider from './Slider';
import clsx from 'clsx';
import { formattedText } from '@/src/utils/formattedText';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Backyards({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<section className={clsx(styles.main, 'backyards')}>
			<div className={global.container}>
				<h2 className={styles.title}>{data.title[lang]}</h2>
				<p
					className={styles.descr}
					dangerouslySetInnerHTML={{
						__html: formattedText(data.content[lang]),
					}}
				/>
			</div>
			<div className={styles.slider}>
				<Slider images={data.images} />
			</div>
		</section>
	);
}

export default Backyards;
