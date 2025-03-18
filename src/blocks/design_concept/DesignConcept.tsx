import global from '@/src/styles/global_styles.module.css';
import styles from './design_concept.module.css';
import SliderDesign from './Slider';
import { formattedText } from '@/src/utils/formattedText';

function DesignConcept({
	data,
	lang = 'ru',
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	lang?: 'ru' | 'kg';
}) {
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
			<SliderDesign images={data.slider_images} />
		</section>
	);
}

export default DesignConcept;
