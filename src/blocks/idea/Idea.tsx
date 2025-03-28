import global from '@/src/styles/global_styles.module.css';
import styles from './idea.module.css';
import { Slider } from '@/src/components';
import { formattedText } from '@/src/utils/formattedText';
import clsx from 'clsx';

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	lang?: 'kg' | 'ru';
}

function Idea({ data, lang = 'ru' }: Props) {
	return (
		<div className={styles.main}>
			<div className={clsx(global.container, styles.wrapper)}>
				<div className={styles.content}>
					<div>
						<h3
							className={styles.title}
							dangerouslySetInnerHTML={{
								__html: formattedText(data.content[lang]),
							}}
						/>
						<p className={styles.descr}></p>
					</div>
					<div className={styles.quot}>
						<p>{data.phrase[lang]}</p>
						<div>{data.phrase_source[lang]}</div>
					</div>
				</div>
				<div className={styles.slider}>
					<Slider id='idea_slider' loop images={data.slider_images} mini />
				</div>
			</div>
		</div>
	);
}

export default Idea;
