'use client';

import React from 'react';
import global from '@/src/styles/global_styles.module.css';
import styles from './navigation.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Select } from '@/src/ui';
import FooterSocials from '../footer_socials/FooterSocials';

interface Props {
	options: {
		value: string;
		label: string;
	}[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	lang?: 'kg' | 'ru';
}

function Navigation({ options, data, lang = 'ru' }: Props) {
	const [burgerVisible, setBurgerVisible] = React.useState(false);
	const handleLang = (value: string) => {
		window.location.href = value;
	};

	return (
		<>
			<div className={styles.space}></div>
			<nav className={clsx(styles.nav, burgerVisible ? styles.active : '')}>
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
									{data.nav_about_us[lang]}
								</Link>
								<Link className={styles.burger_link} href=''>
									{data.nav_infostructure[lang]}
								</Link>
								<Link className={styles.burger_link} href=''>
									{data.nav_project[lang]}
								</Link>
								<Link className={styles.burger_link} href=''>
									{data.nav_contacts[lang]}
								</Link>
							</div>
							<div className={styles.burger_socials}>
								<FooterSocials />
							</div>
							<div className={styles.burger_button}>
								<Button>{data.nav_contact_us[lang]}</Button>
							</div>
						</div>
					)}
					<ul className={styles.list}>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								{data.nav_about_us[lang]}
							</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								{data.nav_infostructure[lang]}
							</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								{data.nav_project[lang]}
							</Link>
						</li>
						<li className={styles.item}>
							<Link className={styles.link} href=''>
								{data.nav_contacts[lang]}
							</Link>
						</li>
					</ul>
					<div className={styles.actions}>
						<div className={styles.button}>
							<Button>{data.nav_contact_us[lang]}</Button>
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
