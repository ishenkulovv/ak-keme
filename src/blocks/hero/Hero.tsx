import global from '@/src/styles/global_styles.module.css';
import styles from './hero.module.css';
import { Slider } from '@/src/components';
import Idea from '../idea/Idea';
import { formattedText } from '@/src/utils/formattedText';

interface Props {
	data: {
		content: string;
		slider_images: string[];
		title: string;
		writer: {
			content: string;
			phrase: string;
			phrase_source: string;
			slider_images: string[];
		};
	};
}

function Hero({ data }: Props) {
	return (
		<section className={styles.main}>
			<div className={styles.wrapper}>
				<div className={global.container}>
					<h2 className={styles.title}>{data.title}</h2>
					<p
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: formattedText(data.content) }}
					/>
				</div>
				<div className={styles.slider}>
					<Slider
						slidesPerView={3}
						loop={true}
						centeredSlides={false}
						images={data.slider_images}
					/>
				</div>
			</div>
			<Idea data={data.writer} />
		</section>
	);
}

export default Hero;
