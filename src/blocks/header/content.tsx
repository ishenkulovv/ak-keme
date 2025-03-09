import Image from 'next/image';
import styles from './header.module.css';

function HeaderContent() {
	return (
		<div className={styles.header}>
			<Image
				src='/images/sky.png'
				alt='Sky'
				className={styles.sky}
				width={1440}
				height={800}
			/>
			<Image
				src='/images/header-building.png'
				alt='Building'
				className={styles.build}
				width={1200}
				height={668}
			/>
			<h1 className={styles.title}>
				Гармония с природой <br />и комфорт современности
			</h1>
		</div>
	);
}

export default HeaderContent;
