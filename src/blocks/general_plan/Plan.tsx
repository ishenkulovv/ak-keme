'use client';

import React from 'react';
import Image from 'next/image';
import styles from './general_plan.module.css';
import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';

const fadeInVariant = {
	hidden: { opacity: 0, y: 50 }, // Начальное состояние (невидимый + смещённый вниз)
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 }, // Плавное появление
	},
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Plan({ data }: { data: any }) {
	const [view, setView] = React.useState<boolean>(false);
	const ref = React.useRef(null);
	const isInView = useInView(ref, {
		amount: 0.6, // ✅ Триггерится, когда 60% блока в зоне видимости
		once: true, // ✅ Анимация срабатывает только один раз
	});
	return (
		<motion.div
			className={styles.image}
			ref={ref}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'} // Активация при входе в зону видимости
			variants={fadeInVariant}
		>
			{!view ? (
				<Image
					src={data.image_2d}
					alt='General Plan'
					width={1200}
					height={680}
					priority
				/>
			) : (
				<Image
					src={data.image_3d}
					alt='General Plan'
					width={1200}
					height={680}
					priority
				/>
			)}

			<div className={styles.switch}>
				<div
					className={clsx(styles.button, !view ? styles.active : '')}
					onClick={() => setView(!view)}
				>
					2D
				</div>
				<div
					className={clsx(styles.button, view ? styles.active : '')}
					onClick={() => setView(!view)}
				>
					3D
				</div>
			</div>
		</motion.div>
	);
}

export default Plan;
