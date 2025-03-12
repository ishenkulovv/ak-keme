import Image from 'next/image';

import global_styles from '@/src/styles/global_styles.module.css';
import styles from './infrastructure.module.css';
import clsx from 'clsx';
import Slider from './Slider';
import Model from './Model';

function Infrastructure() {
	return (
		<>
			<section className={styles.main}>
				<h2 className={styles.title}>Инфраструктура</h2>
				<p className={clsx(styles.descr)}>
					Чолпон-Ата — это туристический центр Иссык-Кульской области с развитой
					инфраструктурой и широкими возможностями для отдыха.
				</p>
				<div className={styles.image}>
					<Image
						src='/images/infast.png'
						width={1420}
						height={680}
						alt='test'
					/>
				</div>
			</section>
			<section className={styles.main}>
				<h2 className={styles.title}>Инфраструктура</h2>
				<div className={clsx(styles.image)}>
					<Image
						src='/images/infast_2.png'
						width={1420}
						height={680}
						alt='test'
					/>
				</div>
				<div className={clsx(global_styles.container, global_styles.mt_60)}>
					<div className={styles.block}>
						<div className={styles.block_left}>
							<p className={styles.block_text}>
								Локация курорта сочетает в себе лучшее: кристально чистые воды
								Иссык-Куля и удобную близость к главным событиям Чолпон-Аты.
							</p>
							<p className={clsx(styles.block_text, global_styles.mt_20)}>
								Здесь вы наслаждаетесь природной красотой и спокойствием,
								оставаясь в самом центре динамичной жизни региона.
							</p>
							<div className={clsx(styles.block_image, global_styles.mt_40)}>
								<Image
									src='/images/infast_3.png'
									width={480}
									height={580}
									alt='test'
								/>
							</div>
						</div>
						<div className={styles.block_right}>
							<div className={styles.block_image}>
								<Image
									src='/images/infast_3.png'
									width={480}
									height={580}
									alt='test'
								/>
							</div>
							<p className={clsx(styles.block_text, global_styles.mt_40)}>
								Лазурная вода, живописные пейзажи и комфортная инфраструктура
								создают атмосферу, где отдых становится по-настоящему
								вдохновляющим.
							</p>
							<p className={clsx(styles.block_text, global_styles.mt_20)}>
								В самом сердце Чолпон-Аты, наш курорт станет идеальным местом
								для тех, кто ценит комфорт и близость к жизни города.
							</p>
						</div>
					</div>
					<h6 className={styles.subtitle}>
						Для комфортного проживания и активного отдыха предусмотрены:
					</h6>
				</div>
				<div className={styles.slider}>
					<Slider />
				</div>
				<div className={styles.model}>
					<Model />
				</div>
			</section>
		</>
	);
}

export default Infrastructure;
