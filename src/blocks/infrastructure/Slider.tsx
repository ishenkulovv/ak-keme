'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './infrastructure.module.css';

const slides = [
	{ src: '/images/slider_1.png', title: 'Теннисный корт' },
	{ src: '/images/slider_2.png', title: 'Детская площадка' },
	{ src: '/images/slider_3.png', title: 'Ресторан на террасе' },
	{ src: '/images/slider_1.png', title: 'Бассейн' },
	{ src: '/images/slider_2.png', title: 'Детская площадка' },
	{ src: '/images/slider_3.png', title: 'Ресторан на террасе' },
	{ src: '/images/slider_1.png', title: 'Бассейн' },
];

function Slider() {
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
				spaceBetween={30}
				slidesPerView={3}
				slidesPerGroup={1}
				navigation={{
					nextEl: '#info_custom-next',
					prevEl: '#info_custom-prev',
				}}
				pagination={{ clickable: true }}
				loop={true}
				breakpoints={{
					320: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3.5 },
					1460: { slidesPerView: 5 },
				}}
				className={styles.swiper}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} className={styles.slide}>
						<div className={styles.slider_item}>
							<div className={styles.slider_image}>
								<Image src={slide.src} width={280} height={330} alt='test' />
							</div>
							<div className={styles.slider_title}>{slide.title}</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Slider;
