import global from '@/src/styles/global_styles.module.css';
import styles from './backyards.module.css';
import Slider from './Slider';
import clsx from 'clsx';

function Backyards() {
	return (
		<section className={clsx(styles.main, 'backyards')}>
			<div className={global.container}>
				<h2 className={styles.title}>Дворы</h2>
				<p className={styles.descr}>
					Дворы спроектированы, сочетая в себе функциональность и комфорт. Здесь
					предусмотрены зоны для отдыха и неспешных бесед, а также зеленые
					пространства, создающие атмосферу уединения и спокойствия. Это место,
					где можно насладиться тишиной и уединением, не покидая территорию
					курорта.
				</p>
			</div>
			<div className={styles.slider}>
				<Slider />
			</div>
		</section>
	);
}

export default Backyards;
