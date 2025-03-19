import Link from 'next/link';
import styles from './footer_list.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FooterList({ data, lang = 'ru' }: { data: any; lang: 'ru' | 'kg' }) {
	return (
		<div className={styles.lists}>
			<div className={styles.list}>
				<h4 className={styles.list_title}>{data.footer_about_project[lang]}</h4>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_concept[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_philosophy[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_architecture[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_genplan[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_infostructure[lang]}
				</Link>
			</div>
			<div className={styles.list}>
				<h4 className={styles.list_title}>{data.footer_kurort[lang]}</h4>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_apartments[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_entrance[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_yards[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_parking[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_construction_progress[lang]}
				</Link>
			</div>
			<div className={styles.list}>
				<h4 className={styles.list_title}>{data.footer_company[lang]}</h4>
				<Link className={styles.list_link} href={'#'}>
					{data.footer_documentation[lang]}
				</Link>
				<Link className={styles.list_link} href={'#'}>
					{data.nav_contacts[lang]}
				</Link>
			</div>
		</div>
	);
}

export default FooterList;
