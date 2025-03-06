import global from '@/src/styles/global_styles.module.css';
import styles from './hero.module.css';
import { Slider } from '@/src/components';

function Hero() {
	return (
		<section className={styles.main}>
			<div className={global.container}>
				<h2 className={styles.title}>Место, где оживает вдохновение</h2>
				<p className={styles.description}>
					Ak-Keme Issyk-Kul Resort — это современный многофункциональный центр
					отдыха и жилья, расположенный на живописном побережье озера
					Иссык-Куль. Наш центр основан на идее гармонии между природой и
					современным комфортом.
				</p>
			</div>
			<div className={styles.slider}>
				<Slider slidesPerView={3} loop={true} centeredSlides={true} />
			</div>
		</section>
	);
}

export default Hero;
