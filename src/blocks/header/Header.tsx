import Image from 'next/image';
import styles from './header.module.css';
import { MotionDiv } from '@/src/components';

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	lang?: 'kg' | 'ru';
}

function Header({ data, lang = 'ru' }: Props) {
	return (
		<div className={styles.header}>
			<MotionDiv
				initial={{ width: '100vw', height: '828px' }}
				animate={{ width: '1200px', height: '720px' }}
				transition={{ duration: 1.4, ease: 'easeInOut', delay: 1 }}
				className={styles.wrapper}
			>
				<Image
					src={data.background_image}
					alt='Sky'
					className={styles.sky}
					width={1440}
					height={800}
					priority
				/>
			</MotionDiv>
			<MotionDiv
				initial={{ position: 'absolute', top: 620 }}
				animate={{ top: 105 }}
				transition={{ duration: 1.2, ease: 'easeOut', delay: 1.3 }}
			>
				<Image
					src={data.building_image}
					alt='Build'
					className={styles.build}
					width={1200}
					height={668}
					priority
				/>
			</MotionDiv>
			<MotionDiv
				initial={{ position: 'absolute', top: 120, opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2, ease: 'easeOut', delay: 1.3 }}
			>
				<h1 className={styles.title}>{data.text[lang]}</h1>
			</MotionDiv>
		</div>
	);
}

export default Header;
