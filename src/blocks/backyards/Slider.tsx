'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import styles from './backyards.module.css';
import './styles.css';

const array = [
	'/images/image-1.png',
	'/images/infast_3.png',
	'/images/infast_4.png',
	'/images/image-1.png',
	'/images/infast_3.png',
	'/images/infast_4.png',
];

function Slider() {
	return (
		<>
			<div className={`${styles.arrow} ${styles.prev}`} id='custom-prev'>
				<Image src='/icons/slider-prev.svg' alt='Prev' width={16} height={16} />
			</div>
			<div className={`${styles.arrow} ${styles.next}`} id='custom-next'>
				<Image src='/icons/slider-next.svg' alt='Prev' width={16} height={16} />
			</div>
			<Swiper
				modules={[Navigation]}
				slidesPerView={3}
				centeredSlides={true} // Центрируем активный слайд
				loop={true} // Цикличный режим
				navigation={{
					nextEl: '#custom-next',
					prevEl: '#custom-prev',
				}}
				spaceBetween={120}
				breakpoints={{
					768: {
						slidesPerView: 3, // По бокам будут видны уменьшенные слайды
					},
					320: {
						slidesPerView: 1, // На маленьких экранах по одному слайду
					},
				}}
				className={styles.slider}
			>
				{array.map((src, index) => (
					<SwiperSlide key={index}>
						<Image
							src={src}
							alt='image'
							width={400}
							height={580}
							className={styles.slider_image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default Slider;
