'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from './slider.module.css';
import clsx from 'clsx';
import { Navigation } from 'swiper/modules';

interface SliderProps {
	id: string;
	buttonPosition?: 'bottom' | 'side';
	slidesPerView?: number;
	centeredSlides?: boolean;
	loop?: boolean;
	images?: string[];
	mini?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	breakpoints?: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	sliderItemClass?: any;
	spaceBetween?: number;
}

function Slider({
	id,
	buttonPosition = 'bottom',
	slidesPerView = 1,
	centeredSlides = false,
	loop = false,
	images,
	mini,
	breakpoints,
	sliderItemClass,
	spaceBetween = 20,
}: SliderProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const sliderRef = React.useRef<any>(null);

	const renderDefault = () => (
		<>
			<SwiperSlide>
				<Image
					src='/images/parking-1.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={clsx(styles.image, sliderItemClass)}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src='/images/parking-2.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={clsx(styles.image, sliderItemClass)}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src='/images/parking-1.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={clsx(styles.image, sliderItemClass)}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src='/images/parking-2.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={clsx(styles.image, sliderItemClass)}
				/>
			</SwiperSlide>
		</>
	);

	return (
		<div className={styles.main}>
			<Swiper
				slidesPerView={slidesPerView}
				spaceBetween={spaceBetween}
				ref={sliderRef}
				modules={[Navigation]}
				className={styles.swiper}
				loop={loop}
				centeredSlides={centeredSlides}
				coverflowEffect={{
					stretch: 100,
				}}
				navigation={{
					nextEl: `#${id}_next`,
					prevEl: `#${id}_prev`,
				}}
				breakpoints={breakpoints}
			>
				{images
					? images.map((image, idx) => (
							<SwiperSlide key={idx}>
								<Image
									src={image}
									alt='Slide 1'
									width={1420}
									height={680}
									className={styles.image}
								/>
							</SwiperSlide>
					  ))
					: renderDefault()}
			</Swiper>
			<div
				className={clsx(
					styles.button,
					styles.prev,
					buttonPosition === 'bottom' && styles.bottom,
					buttonPosition === 'side' && styles.side,
					mini && styles.mini,
					'prev'
				)}
				id={`${id}_prev`}
			>
				<Image src='/icons/slider-prev.svg' alt='Prev' width={16} height={16} />
			</div>
			<div
				className={clsx(
					styles.button,
					styles.next,
					buttonPosition === 'bottom' && styles.bottom,
					buttonPosition === 'side' && styles.side,
					mini && styles.mini,
					'next'
				)}
				id={`${id}_next`}
			>
				<Image src='/icons/slider-next.svg' alt='Next' width={16} height={16} />
			</div>
		</div>
	);
}

export default Slider;
