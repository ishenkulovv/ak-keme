'use client';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import global from '@/src/styles/global_styles.module.css';
import styles from './philosophy.module.css';
import Image from 'next/image';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);
function Philosophy() {
	const mainRef = React.useRef(null);
	const boxRef = React.useRef(null);
	const boxRef2 = React.useRef(null);
	const boxRef3 = React.useRef(null);
	const boxRef4 = React.useRef(null);
	React.useEffect(() => {
		ScrollTrigger.defaults({
			scroller: mainRef.current,
		});
		gsap.to(boxRef.current, {
			opacity: 0,
			scale: 0.9,
			duration: 2,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: boxRef.current,
				start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
				end: 'top 30%',
				scrub: 1, // Привязка анимации к скроллу
			},
		});
		gsap.to(boxRef2.current, {
			y: -760,
			duration: 2,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: boxRef.current,
				start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
				end: 'top 30%',
				scrub: 1, // Привязка анимации к скроллу
			},
		});
		gsap.to(boxRef3.current, {
			y: -1520,
			duration: 2,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: boxRef2.current,
				start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
				end: 'top 30%',
				scrub: 1, // Привязка анимации к скроллу
			},
		});
		gsap.to(boxRef2.current, {
			opacity: 0,
			scale: 0.9,
			duration: 2,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: boxRef2.current,
				start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
				end: 'top 30%',
				scrub: 1, // Привязка анимации к скроллу
			},
		});
		gsap.to(boxRef4.current, {
			y: -2280,
			duration: 2,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: boxRef3.current,
				start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
				end: 'top 30%',
				scrub: 1, // Привязка анимации к скроллу
			},
		});
		gsap.to(boxRef3.current, {
			opacity: 0,
			scale: 0.9,
			duration: 2,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: boxRef3.current,
				start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
				end: 'top 30%',
				scrub: 1, // Привязка анимации к скроллу
			},
		});
	}, []);

	return (
		<section className={styles.main} ref={mainRef}>
			<div className={clsx(global.container, styles.wrapper)}>
				<h2 className={styles.title}>Философия</h2>
				<p className={styles.description}>
					Философия нашего курорта воплощена в четырех ключевых принципах,
					которые создают уникальную атмосферу для каждого гостя и жителя.
				</p>
				<div className={styles.content}>
					<div className={styles.block} ref={boxRef}>
						<Image
							src='/images/image-1.png'
							alt='Image'
							width={540}
							height={680}
							className={styles.image}
						/>
						<div className={styles.block_texts}>
							<div className={styles.step}>| 01</div>
							<h5 className={styles.subtitle}>Гармония с природой</h5>
							<p className={styles.text}>
								Иссык-Куль — это не просто озеро, это культурное и природное
								наследие, которое мы обязаны сохранить. Ak-Keme Issyk-Kul Resort
								создается с учетом экологических стандартов, чтобы
								минимизировать воздействие на окружающую среду. Мы стремимся
								сделать каждый элемент нашего центра частью природы, сохраняя
								уникальную флору и фауну региона.
							</p>
						</div>
					</div>
					<div className={styles.block} ref={boxRef2}>
						<Image
							src='/images/image-1.png'
							alt='Image'
							width={540}
							height={680}
							className={styles.image}
						/>
						<div className={styles.block_texts}>
							<div className={styles.step}>| 02</div>
							<h5 className={styles.subtitle}>Высокие стандарты качества</h5>
							<p className={styles.text}>
								Каждый аспект строительства и обслуживания в Ak-Keme Issyk-Kul
								Resort подчиняется самым высоким мировым стандартам. От
								архитектуры зданий до предоставляемых услуг — все направлено на
								создание уникального опыта для гостей и жителей центра.
							</p>
						</div>
					</div>
					<div className={styles.block} ref={boxRef3}>
						<Image
							src='/images/image-1.png'
							alt='Image'
							width={540}
							height={680}
							className={styles.image}
						/>
						<div className={styles.block_texts}>
							<div className={styles.step}>| 03</div>
							<h5 className={styles.subtitle}>
								Пространство для развития и вдохновения
							</h5>
							<p className={styles.text}>
								Ak-Keme Issyk-Kul Resort — это не просто место для отдыха, но и
								пространство для самосовершенствования, культурного обмена и
								творчества. Мы создаем площадки для проведения мероприятий,
								конференций и культурных встреч, способствуя развитию региона
								как центра туризма мирового уровня.
							</p>
						</div>
					</div>
					<div className={styles.block} ref={boxRef4}>
						<Image
							src='/images/image-1.png'
							alt='Image'
							width={540}
							height={680}
							className={styles.image}
						/>
						<div className={styles.block_texts}>
							<div className={styles.step}>| 04</div>
							<h5 className={styles.subtitle}>Уединение и комфорт</h5>
							<p className={styles.text}>
								Название Ак-Кеме символизирует уединение, чистоту и покой. Мы
								создаем пространство, где гости могут насладиться приватностью,
								забыв о городской суете. Каждая деталь продумана, чтобы
								обеспечить комфортное пребывание, будь то семейный отдых или
								бизнес-поездка.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Philosophy;
