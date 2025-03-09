'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from './slider.module.css';
import clsx from 'clsx';

interface SliderProps {
	buttonPosition?: 'bottom' | 'side';
	slidesPerView?: number;
	sliderPerViewChange?: number;
	centeredSlides?: boolean;
	loop?: boolean;
	images?: string[];
	mini?: boolean;
}

function Slider({
	buttonPosition = 'bottom',
	slidesPerView = 1,
	sliderPerViewChange,
	centeredSlides = false,
	loop = false,
	images,
	mini,
}: SliderProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const sliderRef = React.useRef<any>(null);
	const [isBeginning, setIsBeginning] = React.useState(true);
	const [isEnd, setIsEnd] = React.useState(false);
	const [slidesPerViewCustom, setSlidesPerViewCustom] =
		React.useState(slidesPerView);

	const handlePrev = React.useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = React.useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	React.useEffect(() => {
		const swiperInstance = sliderRef.current?.swiper;

		if (!swiperInstance) return;

		const updateNavButtons = () => {
			setIsBeginning(swiperInstance.isBeginning);
			setIsEnd(swiperInstance.isEnd);
		};

		swiperInstance.on('slideChange', updateNavButtons);
		updateNavButtons();

		return () => {
			swiperInstance.off('slideChange', updateNavButtons);
		};
	}, []);

	React.useEffect(() => {
		if (!sliderPerViewChange) return;
		const handleScroll = () => {
			if (!sliderRef.current) return;

			const rect = sliderRef.current.getBoundingClientRect();

			// Когда элемент в зоне видимости (например, на 50% экрана)
			if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
				setSlidesPerViewCustom(sliderPerViewChange); // При попадании в viewport меняем на 1
			} else {
				setSlidesPerViewCustom(slidesPerView); // Возвращаем стандартное значение
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const renderDefault = () => (
		<>
			<SwiperSlide>
				<Image
					src='/images/parking-1.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={styles.image}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src='/images/parking-2.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={styles.image}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src='/images/parking-1.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={styles.image}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src='/images/parking-2.png'
					alt='Slide 1'
					width={1420}
					height={680}
					className={styles.image}
				/>
			</SwiperSlide>
		</>
	);

	return (
		<div className={styles.main}>
			<Swiper
				slidesPerView={slidesPerViewCustom}
				spaceBetween={20}
				ref={sliderRef}
				className={styles.swiper}
				loop={loop}
				centeredSlides={centeredSlides}
				coverflowEffect={{
					stretch: 100,
				}}
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
					isBeginning && styles.disabled
				)}
				onClick={!isBeginning ? handlePrev : undefined}
			>
				<Image src='/icons/slider-prev.svg' alt='Prev' width={16} height={16} />
			</div>
			<div
				className={clsx(
					styles.button,
					buttonPosition === 'bottom' && styles.bottom,
					buttonPosition === 'side' && styles.side,
					mini && styles.mini,
					styles.next,
					isEnd && styles.disabled
				)}
				onClick={!isEnd ? handleNext : undefined}
			>
				<Image src='/icons/slider-next.svg' alt='Prev' width={16} height={16} />
			</div>
		</div>
	);
}

export default Slider;
