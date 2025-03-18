import React from 'react';
import Image from 'next/image';
import global_styles from '@/src/styles/global_styles.module.css';
import styles from './infrastructure.module.css';
import clsx from 'clsx';
import Slider from './Slider';
import Model from './Model';
import ImageFirst from './ImageFirst';
import ImageSecond from './ImageSecond';
import { formattedText } from '@/src/utils/formattedText';

function Infrastructure({
	data,
	lang = 'ru',
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	lang?: 'ru' | 'kg';
}) {
	return (
		<>
			<section className={styles.main}>
				<h2 className={styles.title}>{data.title[lang]}</h2>
				<p
					className={clsx(styles.descr)}
					dangerouslySetInnerHTML={{
						__html: formattedText(data.content[lang]),
					}}
				/>
				{/* TODO: image translate */}
				<ImageFirst />
			</section>
			<section className={styles.main}>
				{/* TODO: translate */}
				<h2 className={styles.title}>Локация курорта</h2>
				<ImageSecond />
				<div className={clsx(global_styles.container, global_styles.mt_60)}>
					<div className={styles.block}>
						<div className={styles.block_left}>
							<p
								className={styles.block_text}
								dangerouslySetInnerHTML={{
									__html: formattedText(data.left_content[lang]),
								}}
							/>
							<div className={clsx(styles.block_image, global_styles.mt_40)}>
								<Image
									src={data.left_image}
									width={480}
									height={580}
									alt='test'
								/>
							</div>
						</div>
						<div className={styles.block_right}>
							<div className={styles.block_image}>
								<Image
									src={data.right_image}
									width={480}
									height={580}
									alt='test'
								/>
							</div>
							<p
								className={clsx(styles.block_text, global_styles.mt_40)}
								dangerouslySetInnerHTML={{
									__html: formattedText(data.right_content[lang]),
								}}
							/>
						</div>
					</div>
					<h6 className={styles.subtitle}>{data.slider_title[lang]}</h6>
				</div>
				<div className={styles.slider}>
					<Slider data={data.slider} lang={lang} />
				</div>
			</section>
			<div className={styles.model}>
				<Model data={data} />
			</div>
		</>
	);
}

export default Infrastructure;
