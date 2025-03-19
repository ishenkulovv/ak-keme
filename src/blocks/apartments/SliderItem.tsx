/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import styles from './apartments.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { formattedText } from '@/src/utils/formattedText';

function SliderItem({
	item,
	lang = 'ru',
	index,
}: {
	item: any;
	lang?: 'ru' | 'kg';
	index: number;
}) {
	const [view3D, setView3D] = React.useState(false);
	return (
		<div className={styles.slider_item}>
			<div className={styles.slider_view}>
				<div className={styles.slider_images}>
					{!view3D ? (
						<Image
							src={item?.image_2d}
							alt='Apartment'
							width={360}
							height={360}
						/>
					) : (
						<Image
							src={item?.image_3d}
							alt='Apartment'
							width={360}
							height={360}
						/>
					)}
				</div>
				<div className={styles.slider_switch}>
					<span
						className={clsx(!view3D ? styles.slider_switch_active : '')}
						onClick={() => setView3D(!view3D)}
					>
						2D
					</span>
					<span
						className={clsx(view3D ? styles.slider_switch_active : '')}
						onClick={() => setView3D(!view3D)}
					>
						3D
					</span>
				</div>
			</div>
			<div className={styles.slider_texts}>
				<span className={styles.slider_item_index}>/ 0{index}</span>
				<h6 className={styles.slider_item_title}>{item.title[lang]}</h6>
				<p
					className={styles.slider_item_descr}
					dangerouslySetInnerHTML={{
						__html: formattedText(item.content[lang]),
					}}
				/>
			</div>
		</div>
	);
}

export default SliderItem;
