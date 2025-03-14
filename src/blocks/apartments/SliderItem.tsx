'use client';

import React from 'react';
import styles from './apartments.module.css';
import Image from 'next/image';
import clsx from 'clsx';

function SliderItem() {
	const [view3D, setView3D] = React.useState(false);
	return (
		<div className={styles.slider_item}>
			<div className={styles.slider_view}>
				<div className={styles.slider_images}>
					{!view3D ? (
						<Image
							src='/images/apart_1.png'
							alt='Apartment'
							width={360}
							height={360}
						/>
					) : (
						<Image
							src='/images/apart_2.png'
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
				<span className={styles.slider_item_index}>/ 01</span>
				<h6 className={styles.slider_item_title}>Квартира</h6>
				<p className={styles.slider_item_descr}>
					Уютный интерьер, современная мебель и панорамные окна с живописным
					видом на природу создают атмосферу комфорта и спокойствия.
				</p>
				<p className={styles.slider_item_descr}>
					В шаговой доступности — пляжи, кафе и развлекательные заведения, что
					делает жилье идеальным местом для наслаждения отдыхом и природой
					Иссык-Куля.
				</p>
			</div>
		</div>
	);
}

export default SliderItem;
