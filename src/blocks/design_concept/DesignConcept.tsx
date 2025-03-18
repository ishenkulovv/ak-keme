import global from '@/src/styles/global_styles.module.css';
import styles from './design_concept.module.css';
import { Slider } from '@/src/components';

function DesignConcept() {
	return (
		<section className={styles.main}>
			<div className={global.container}>
				<h2 className={styles.title}>Когда дом — часть природы </h2>
				<p className={styles.description}>
					Дизайн курорта отражает красоту озера и движения волн. Здания с
					плавными линиями и панорамными окнами словно сливаются с природой,
					открывая захватывающие виды. Натуральные материалы и светлые оттенки
					создают ощущение легкости, а продуманные детали делают пространство
					уютным и стильным.
				</p>
			</div>
			<div className={styles.slider}>
				<Slider
					id='design_slider'
					buttonPosition='side'
					slidesPerView={1}
					loop
					breakpoints={{
						320: { slidesPerView: 1 },
						501: { slidesPerView: 2 },
						1100: { slidesPerView: 3 },
					}}
				/>
			</div>
		</section>
	);
}

export default DesignConcept;
