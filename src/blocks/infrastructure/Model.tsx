'use client';

import React from 'react';
import Image from 'next/image';
import styles from './infrastructure.module.css';
import { MoonIcon, SunIcon } from '@/public/icons';

function Model() {
	const [nightView, setNightView] = React.useState(false);

	return (
		<>
			{!nightView ? (
				<Image
					src='/images/model_day.png'
					width={1440}
					height={650}
					alt='Model'
					className={styles.model_image}
				/>
			) : (
				<>
					{/* TODO: Доделать дождь */}
					<Image
						src='/images/model_night.png'
						width={1440}
						height={650}
						alt='Model'
						className={styles.model_image}
					/>
				</>
			)}
			<label htmlFor='switch' className={styles.model_switch}>
				<div className={styles.icon}>
					<SunIcon color={nightView ? '#E1E1E1' : '#14716B'} />
				</div>
				<div className={styles.switch}>
					<input
						type='checkbox'
						id='switch'
						onChange={() => setNightView(!nightView)}
					/>
					<label htmlFor='switch'>Toggle</label>
				</div>
				<div className={styles.icon}>
					<MoonIcon color={!nightView ? '#E1E1E1' : '#14716B'} />
				</div>
			</label>
		</>
	);
}

export default Model;
