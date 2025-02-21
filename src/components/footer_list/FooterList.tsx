import Link from 'next/link';
import styles from './footer_list.module.css';

import {
	footerCompanyList,
	footerProjectList,
	footerResortList,
} from '@/src/consts/consts';

function FooterList() {
	return (
		<div className={styles.lists}>
			<div className={styles.list}>
				<h4 className={styles.list_title}>{footerProjectList.title}</h4>
				{footerProjectList.links.map((link, idx) => (
					<Link className={styles.list_link} href={link.href} key={idx}>
						{link.title}
					</Link>
				))}
			</div>
			<div className={styles.list}>
				<h4 className={styles.list_title}>{footerResortList.title}</h4>
				{footerResortList.links.map((link, idx) => (
					<Link className={styles.list_link} href={link.href} key={idx}>
						{link.title}
					</Link>
				))}
			</div>
			<div className={styles.list}>
				<h4 className={styles.list_title}>{footerCompanyList.title}</h4>
				{footerCompanyList.links.map((link, idx) => (
					<Link className={styles.list_link} href={link.href} key={idx}>
						{link.title}
					</Link>
				))}
			</div>
		</div>
	);
}

export default FooterList;
