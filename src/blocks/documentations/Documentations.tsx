import Image from 'next/image';
import styles from './documentations.module.css';
import global from '@/src/styles/global_styles.module.css';
import clsx from 'clsx';

function Documentations() {
	return (
		<section className={styles.documentations}>
			<div className={clsx(global.container, styles.container)}>
				<h2 className={styles.title}>Документация</h2>
				<div className={styles.documents}>
					<div className={styles.block}>
						<h5 className={styles.doc_title}>Разрешение на строительство</h5>
						<p className={styles.doc_date}>06.06.2024</p>
						<a href='' className={styles.doc_link}>
							<Image src='/icons/file.svg' alt='file' width={20} height={20} />
						</a>
					</div>
					<div className={styles.block}>
						<h5 className={styles.doc_title}>Разрешение на строительство</h5>
						<p className={styles.doc_date}>06.06.2024</p>
						<a href='' className={styles.doc_link}>
							<Image src='/icons/file.svg' alt='file' width={20} height={20} />
						</a>
					</div>
					<div className={styles.block}>
						<h5 className={styles.doc_title}>Разрешение на строительство</h5>
						<p className={styles.doc_date}>06.06.2024</p>
						<a href='' className={styles.doc_link}>
							<Image src='/icons/file.svg' alt='file' width={20} height={20} />
						</a>
					</div>
					<div className={styles.block}>
						<h5 className={styles.doc_title}>Разрешение на строительство</h5>
						<p className={styles.doc_date}>06.06.2024</p>
						<a href='' className={styles.doc_link}>
							<Image src='/icons/file.svg' alt='file' width={20} height={20} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Documentations;
