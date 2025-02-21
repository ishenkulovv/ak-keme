import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './footer.module.css';
import global from '@/src/styles/global_styles.module.css';
import { FooterList, FooterSocials } from '@/src/components';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={clsx(global.container, styles.container)}>
				<div className={styles.contact}>
					<div className={styles.contact_left}>
						<div className={styles.logo}>
							<Image src='/logo.png' alt='Ak keme' width={127} height={48} />
						</div>
						<p className={styles.contact_text}>
							<span>Адрес:</span> Бишкек, ул. Тыныстанова, 12
						</p>
						<p className={styles.contact_text}>Пн-Вс 09:00-21:00 </p>
						<p className={styles.contact_text}>
							<span>Телефон:</span> +996 700 123 456
						</p>
						<p className={styles.contact_text}>
							<span>Почта:</span> <a href='$'>akkeme@mail.com</a>
						</p>
						<FooterSocials />
					</div>
					<div className={styles.contact_right}>
						<FooterList />
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={global.container}>
					<p>©2025 &quot;Ak-Keme Issyk-Kul Resort&quot;. Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
