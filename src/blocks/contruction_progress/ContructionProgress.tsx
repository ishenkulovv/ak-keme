import global from '@/src/styles/global_styles.module.css';
import styles from './contruction_progress.module.css';
import clsx from 'clsx';

function ConstructionProgress() {
	return (
		<section className={styles.main}>
			<div className={clsx(global.container, styles.container)}>
				<h2 className={styles.title}>Ход строительства </h2>
				<div className={styles.video}>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/T6eK-2OQtew?si=Qe95V1juhvPXMr4B'
						title='YouTube video player'
					></iframe>
				</div>
			</div>
		</section>
	);
}

export default ConstructionProgress;
