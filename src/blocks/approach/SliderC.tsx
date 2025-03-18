'use client';

import { useMediaQuery } from 'react-responsive';
import styles from './approach.module.css';
import { Slider } from '@/src/components';

function SliderDesign() {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	return (
		<div className={styles.slider}>
			<Slider
				id='approach_slider'
				buttonPosition={isMobile ? 'bottom' : 'side'}
				slidesPerView={1}
				loop
				spaceBetween={isMobile ? 10 : 20}
				breakpoints={{
					320: { slidesPerView: 1 },
					501: { slidesPerView: 2 },
					1100: { slidesPerView: 3 },
				}}
			/>
		</div>
	);
}

export default SliderDesign;
