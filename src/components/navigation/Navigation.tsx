'use client';

import React from 'react';
import global from '@/src/styles/global_styles.module.css';
import styles from './navigation.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Select } from '@/src/ui';
import { useRouter } from 'next/navigation';
import FooterSocials from '../footer_socials/FooterSocials';

interface Props {
	options: {
		value: string;
		label: string;
	}[];
}

function Navigation({ options }: Props) {
	const router = useRouter();
	const [burgerVisible, setBurgerVisible] = React.useState(false);
	const handleLang = (value: string) => {
		router.push(`/${value}`);
	};

	return (
		<>
			<div className={styles.space}></div>
			<nav className={clsx(styles.nav)}>
				<div className={clsx(global.container, styles.container)}>
					<div className={styles.logo}>
						<Image src='/logo-nav.png' alt='Ak keme' width='127' height='48' />
					</div>
					<div
						className={styles.burger}
						onClick={() => setBurgerVisible(!burgerVisible)}
					>
						{!burgerVisible ? (
							<Image
								src='/icons/burger-icon.svg'
								alt='Ak keme'
								width='32'
								height='24'
							/>
						) : (
							<Image
								src='/icons/burger-x.svg'
								alt='Ak keme'
								width='32'
								height='24'
								style={{ marginRight: 2 }}
							/>
						)}
					</div>
					{burgerVisible && (
						<div className={styles.burger_content}>
							<div className={styles.burger_links}>
								<Link className={styles.burger_link} href=''>
									О нас
								</Link>
								<Link className={styles.burger_link} href=''>
									Инфраструктура
								</Link>
								<Link className={styles.burger_link} href=''>
									Проект
								</Link>
								<Link className={styles.burger_link} href=''>
									Контакты
								</Link>
							</div>
							<div className={styles.burger_socials}>
								<FooterSocials />
							</div>
							<div className={styles.burger_button}>
								<Button>Связаться с нами</Button>
							</div>
						</div>
					)}
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
					<div className={styles.actions}>
						<div className={styles.button}>
							<Button>Связаться с нами</Button>
						</div>
						<div className={styles.select}>
							<Select
								options={options}
								onChange={handleLang}
								className={styles.select_content}
							/>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
