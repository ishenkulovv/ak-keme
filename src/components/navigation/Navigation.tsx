'use client';

import global from '@/src/styles/global_styles.module.css';
import styles from './navigation.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/src/ui';

function Navigation() {
	return (
		<>
			<div className={styles.space}></div>
			<nav className={clsx(styles.nav)}>
				<div className={clsx(global.container, styles.container)}>
					<div className={styles.logo}>
						<Image src='/logo-nav.png' alt='Ak keme' width='127' height='48' />
					</div>
					<ul className={styles.list}>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								О нас
							</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								Инфраструктура
							</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								Проект
							</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								Контакты{' '}
							</Link>
						</li>
					</ul>
					<div className={styles.button}>
						<Button>Связаться с нами</Button>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
