'use client';

import React from 'react';
import SliderItem from './SliderItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './apartments.module.css';
import Image from 'next/image';
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

function Slider() {
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
			<div className={`${styles.arrow} ${styles.prev}`} id='custom-prev'>
				<Image src='/icons/slider-prev.svg' alt='Prev' width={16} height={16} />
			</div>
			<div className={`${styles.arrow} ${styles.next}`} id='custom-next'>
				<Image src='/icons/slider-next.svg' alt='Prev' width={16} height={16} />
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={1.4}
				slidesPerGroup={1}
				navigation={{
					nextEl: '#custom-next',
					prevEl: '#custom-prev',
				}}
				pagination={{ clickable: true }}
				loop={true}
				breakpoints={{
					320: { slidesPerView: 1 },
					768: { slidesPerView: 1.1 },
					1024: { slidesPerView: 1.3 },
					1324: { slidesPerView: 1.5 },
				}}
				className={styles.slider}
			>
				{Array.from({ length: 10 }, (_, i) => (
					<SwiperSlide key={i}>
						<SliderItem />
					</SwiperSlide>
				))}
			</Swiper>
		</MotionDiv>
	);
}

export default Slider;
