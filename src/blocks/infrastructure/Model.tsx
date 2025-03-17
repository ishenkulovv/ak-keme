'use client';

import React from 'react';
import Image from 'next/image';
import styles from './infrastructure.module.css';
import { MoonIcon, SunIcon } from '@/public/icons';
import { MotionDiv } from '@/src/components';
import { useInView } from 'framer-motion';

const fadeInVariant = {
	hidden: { opacity: 0, y: 350 }, // Начальное состояние (невидимый + смещённый вниз)
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7 }, // Плавное появление
	},
};

function Model() {
	const [nightView, setNightView] = React.useState(false);
	const ref = React.useRef(null);
	const isInView = useInView(ref, {
		amount: 0.8, // ✅ Триггерится, когда 60% блока в зоне видимости
		once: true, // ✅ Анимация срабатывает только один раз
	});

	return (
		<MotionDiv
			ref={ref}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'} // Активация при входе в зону видимости
			variants={fadeInVariant}
		>
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
		</MotionDiv>
	);
}

export default Model;
