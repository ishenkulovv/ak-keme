/* eslint-disable @typescript-eslint/no-explicit-any */
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
	hidden: { opacity: 0, y: 350 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7 },
	},
};

function Slider({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, {
		amount: 0.4,
		once: true,
	});
	return (
		<MotionDiv
			ref={ref}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			variants={fadeInVariant}
		>
			<div
				className={`${styles.arrow} ${styles.prev}`}
				id='apartments-custom-prev'
			>
				<Image src='/icons/slider-prev.svg' alt='Prev' width={16} height={16} />
			</div>
			<div
				className={`${styles.arrow} ${styles.next}`}
				id='apartments-custom-next'
			>
				<Image src='/icons/slider-next.svg' alt='Prev' width={16} height={16} />
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={1.1}
				slidesPerGroup={1}
				navigation={{
					nextEl: '#apartments-custom-next',
					prevEl: '#apartments-custom-prev',
				}}
				loop={true}
				breakpoints={{
					320: { slidesPerView: 1.1 },
					768: { slidesPerView: 1.4 },
					1024: { slidesPerView: 1.3 },
					1324: { slidesPerView: 1.5 },
				}}
				className={styles.slider}
			>
				{data?.map((item: any, index: number) => (
					<SwiperSlide key={index}>
						<SliderItem item={item} index={index + 1} lang={lang} />
					</SwiperSlide>
				))}
			</Swiper>
		</MotionDiv>
	);
}

export default Slider;
