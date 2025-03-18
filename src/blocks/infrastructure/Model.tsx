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
		transition: { duration: 0.5 }, // Плавное появление
	},
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Model({ data }: { data: any }) {
	const [nightView, setNightView] = React.useState(false);
	const ref = React.useRef(null);
	const isInView = useInView(ref, {
		amount: 0.4, // ✅ Триггерится, когда 60% блока в зоне видимости
		once: true, // ✅ Анимация срабатывает только один раз
	});

	return (
		<MotionDiv
			ref={ref}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'} // Активация при входе в зону видимости
			variants={fadeInVariant}
		>
			<Image
				src={data.light_image}
				width={1440}
				height={650}
				alt='Model'
				className={styles.model_image}
				style={{ display: nightView ? 'block' : 'none' }}
			/>
			<Image
				src={data.dark_image}
				width={1440}
				height={650}
				alt='Model'
				className={styles.model_image}
				style={{ display: !nightView ? 'block' : 'none' }}
			/>
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
