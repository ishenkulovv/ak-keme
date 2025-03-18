import styles from './general_plan.module.css';
import Plan from './Plan';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GeneralPlan({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<section className={styles.main}>
			<div className={styles.container}>
				<h2 className={styles.title}>{data.title[lang]}</h2>
				<div className={styles.content}>
					<Plan data={data} />
				</div>
			</div>
		</section>
	);
}

export default GeneralPlan;
