import global from '@/src/styles/global_styles.module.css';
import styles from './contruction_progress.module.css';
import clsx from 'clsx';
import { Select } from '@/src/ui';

const options = [
	{
		value: 'january',
		label: 'Январь 2025',
	},
	{
		value: 'february',
		label: 'Февраль 2025',
	},
	{
		value: 'march',
		label: 'Март 2025',
	},
];

function ConstructionProgress() {
	return (
		<section className={styles.main}>
			<div className={clsx(global.container, styles.container)}>
				<h2 className={styles.title}>Ход строительства </h2>
				<div className={styles.content}>
					<div className={styles.select}>
						<Select options={options} />
					</div>

					<div className={styles.video}>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/T6eK-2OQtew?si=Qe95V1juhvPXMr4B'
							title='YouTube video player'
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ConstructionProgress;
