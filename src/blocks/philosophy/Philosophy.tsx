'use client';

import React from 'react';

import global from '@/src/styles/global_styles.module.css';
import styles from './philosophy.module.css';
import Image from 'next/image';
import './animate.css';
import clsx from 'clsx';
import { useAnimate } from './animate';
import { formattedText } from '@/src/utils/formattedText';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Philosophy({ data, lang = 'ru' }: { data: any; lang?: 'kg' | 'ru' }) {
	useAnimate();

	return (
		<section
			className={styles.main}
			style={{ height: 950 * data?.slider?.length || 1 }}
			id='main_ph'
		>
			<div className={clsx(global.container, styles.wrapper)} id='trigger'>
				<div id='animate_block'>
					<h2 className={styles.title} id='title'>
						{data.title[lang]}
					</h2>
					<p
						className={styles.description}
						id='descr'
						dangerouslySetInnerHTML={{
							__html: formattedText(data.content[lang]),
						}}
					/>
					<div className={styles.content}>
						{data?.slider?.map(
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							(item: any, index: number) => (
								<div
									className={clsx(styles.block, 'ph_block')}
									id={`block_${index + 1}`}
									key={index}
								>
									<Image
										src={item.image}
										alt='Image'
										width={540}
										height={600}
										className={styles.image}
									/>
									<div className={styles.block_texts}>
										<div className={styles.step}>| 0{index + 1}</div>
										<h5 className={styles.subtitle}>{item?.title[lang]}</h5>
										<p
											className={styles.text}
											dangerouslySetInnerHTML={{
												__html: formattedText(item.content[lang]),
											}}
										/>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Philosophy;
