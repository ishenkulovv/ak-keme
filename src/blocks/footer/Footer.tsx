import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './footer.module.css';
import global from '@/src/styles/global_styles.module.css';
import { FooterList, FooterSocials, Info } from '@/src/components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Footer({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<>
			<footer className={styles.footer}>
				<div className={clsx(global.container, styles.container)}>
					<div className={styles.contact}>
						<div className={styles.contact_left}>
							<div className={styles.logo}>
								<Image src='/logo.png' alt='Ak keme' width={127} height={48} />
							</div>
							<Info data={data} lang={lang} />
							<FooterSocials />
						</div>
						<div className={styles.contact_right}>
							<FooterList data={data} lang={lang} />
						</div>
					</div>
				</div>
			</footer>
			<div className={styles.bottom}>
				<div className={global.container}>{data.footer_copy_right[lang]}</div>
			</div>
		</>
	);
}

export default Footer;
