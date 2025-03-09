import global from '@/src/styles/global_styles.module.css';
import styles from './hero.module.css';
import { Slider } from '@/src/components';
import Idea from '../idea/Idea';

function Hero() {
	return (
		<section className={styles.main}>
			<div className={styles.wrapper}>
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
					<Slider
						slidesPerView={3}
						sliderPerViewChange={1}
						loop={true}
						centeredSlides={false}
					/>
				</div>
			</div>
			<Idea />
		</section>
	);
}

export default Hero;
