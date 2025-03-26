/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './infrastructure.module.css';
import './style.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Slider({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<div className={styles.sliderContainer}>
			<div className={`${styles.arrow} ${styles.prev}`} id='info_custom-prev'>
				<Image src='/icons/slider-prev.svg' alt='Prev' width={16} height={16} />
			</div>
			<div className={`${styles.arrow} ${styles.next}`} id='info_custom-next'>
				<Image src='/icons/slider-next.svg' alt='Prev' width={16} height={16} />
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={3}
				slidesPerGroup={1}
				navigation={{
					nextEl: '#info_custom-next',
					prevEl: '#info_custom-prev',
				}}
				pagination={{ clickable: true }}
				loop={true}
				breakpoints={{
					320: { slidesPerView: 1.4 },
					550: { slidesPerView: 2.2 },
					768: { slidesPerView: 2.9 },
					1024: { slidesPerView: 3.5 },
					1460: { slidesPerView: 5 },
				}}
				className={styles.swiper}
			>
				{data.map((slide: any, index: number) => (
					<SwiperSlide key={index} className={styles.slide}>
						<div className={styles.slider_item}>
							<div className={styles.slider_image}>
								<Image src={slide.image} width={280} height={330} alt='test' />
							</div>
							<div className={styles.slider_title}>{slide.title[lang]}</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Slider;
