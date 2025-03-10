import styles from './general_plan.module.css';
import Plan from './Plan';

function GeneralPlan() {
	return (
		<section className={styles.main}>
			<div className={styles.container}>
				<h2 className={styles.title}>Генплан</h2>
				<div className={styles.content}>
					<Plan />
				</div>
			</div>
		</section>
	);
}

export default GeneralPlan;
