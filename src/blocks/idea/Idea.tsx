import global from '@/src/styles/global_styles.module.css';
import styles from './idea.module.css';
import { Slider } from '@/src/components';
import { formattedText } from '@/src/utils/formattedText';
import clsx from 'clsx';

interface Props {
	data: {
		content: string;
		phrase: string;
		phrase_source: string;
		slider_images: string[];
	};
}

function Idea({ data }: Props) {
	return (
		<div className={styles.main}>
			<div className={clsx(global.container, styles.wrapper)}>
				<div className={styles.content}>
					<div>
						<h3
							className={styles.title}
							dangerouslySetInnerHTML={{ __html: formattedText(data.content) }}
						/>
						<p className={styles.descr}></p>
					</div>
					<div className={styles.quot}>
						<p>{data.phrase}</p>
						<div>{data.phrase_source}</div>
					</div>
				</div>
				<div className={styles.slider}>
					<Slider images={data.slider_images} mini />
				</div>
			</div>
		</div>
	);
}

export default Idea;
