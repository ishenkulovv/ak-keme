'use client';

import React from 'react';
import Image from 'next/image';
import styles from './general_plan.module.css';
import clsx from 'clsx';

function Plan() {
	const [view, setView] = React.useState<boolean>(true);
	return (
		<div className={styles.image}>
			{!view ? (
				<Image
					src='/images/general_plan_1.png'
					alt='General Plan'
					width={1200}
					height={680}
					onClick={() => setView(!view)}
				/>
			) : (
				<Image
					src='/images/general_plan_2.png'
					alt='General Plan'
					width={1200}
					height={680}
				/>
			)}

			<div className={styles.switch}>
				<div
					className={clsx(styles.button, !view ? styles.active : '')}
					onClick={() => setView(!view)}
				>
					2D
				</div>
				<div
					className={clsx(styles.button, view ? styles.active : '')}
					onClick={() => setView(!view)}
				>
					3D
				</div>
			</div>
		</div>
	);
}

export default Plan;
