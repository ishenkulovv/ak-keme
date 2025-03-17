'use client';

import React from 'react';
import { MotionDiv } from '@/src/components';
import styles from './infrastructure.module.css';
import Image from 'next/image';
import { useInView } from 'framer-motion';

const fadeInVariant = {
	hidden: { opacity: 0, y: 350 }, // Начальное состояние (невидимый + смещённый вниз)
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7 }, // Плавное появление
	},
};

function ImageFirst() {
	const ref = React.useRef(null);
	const isInView = useInView(ref, {
		amount: 0.8, // ✅ Триггерится, когда 60% блока в зоне видимости
		once: true, // ✅ Анимация срабатывает только один раз
	});
	return (
		<MotionDiv
			className={styles.image}
			ref={ref}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'} // Активация при входе в зону видимости
			variants={fadeInVariant}
		>
			<Image src='/images/infast.png' width={1420} height={680} alt='test' />
		</MotionDiv>
	);
}

export default ImageFirst;
