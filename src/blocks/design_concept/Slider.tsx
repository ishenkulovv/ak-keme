'use client';

import { useMediaQuery } from 'react-responsive';
import styles from './design_concept.module.css';
import { Slider } from '@/src/components';

function SliderDesign({ images }: { images: string[] }) {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	return (
		<div className={styles.slider}>
			<Slider
				images={images}
				id='design_slider'
				buttonPosition={isMobile ? 'bottom' : 'side'}
				slidesPerView={1}
				loop={true}
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
