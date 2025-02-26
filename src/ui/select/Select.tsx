'use client';

import React from 'react';
import Image from 'next/image';
import styles from './select.module.css';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const defaultOptions = [
	{
		value: 'january',
		label: 'Январь 2025',
	},
	{
		value: 'february',
		label: 'Февраль 2025',
	},
	{
		value: 'march',
		label: 'Март 2025',
	},
	{
		value: 'april',
		label: 'Апрель 2025',
	},
	{
		value: 'may',
		label: 'Май 2025',
	},
	{
		value: 'june',
		label: 'Июнь 2025',
	},
	{
		value: 'july',
		label: 'Июль 2025',
	},
	{
		value: 'august',
		label: 'Август 2025',
	},
	{
		value: 'september',
		label: 'Сентябрь 2025',
	},
	{
		value: 'october',
		label: 'Октябрь 2025',
	},
	{
		value: 'november',
		label: 'Ноябрь 2025',
	},
	{
		value: 'december',
		label: 'Декабрь 2025',
	},
];

interface SelectOptions {
	options: {
		value: string;
		label: string;
	}[];
}

function Select({ options = defaultOptions }: SelectOptions) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(options[0]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.content} onClick={() => setOpen(!open)}>
				<div className={styles.value}>{value.label}</div>
				<Image
					src='/icons/arrow_dropdown.svg'
					alt='Arrow'
					width={20}
					height={20}
					className={styles.icon}
				/>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: -10, height: 0 }}
						animate={{ opacity: 1, scale: 1, y: 0, height: 'auto' }}
						exit={{ opacity: 0, scale: 0.95, y: -10, height: 0 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className={clsx(styles.dropdown)}
					>
						{options?.map(option => (
							<div
								key={option.value}
								className={clsx(
									styles.item,
									value.value === option.value && styles.active
								)}
								onClick={() => {
									setValue(option);
									setOpen(false);
								}}
							>
								{option.label}
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default Select;
