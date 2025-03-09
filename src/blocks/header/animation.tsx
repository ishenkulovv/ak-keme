'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './header.module.css';

export default function HeaderAnimation() {
	const [isShrunk, setIsShrunk] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsShrunk(true), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<motion.div
			initial={{ width: '100vw', height: '828px' }}
			animate={
				isShrunk
					? { width: '1200px', height: '720px' }
					: { width: '100vw', height: '828px' }
			}
			transition={{ duration: 1.4, ease: 'easeInOut' }}
			className={styles.wrapper}
		/>
	);
}
