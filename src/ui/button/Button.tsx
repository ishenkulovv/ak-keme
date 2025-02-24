'use client';

import clsx from 'clsx';
import styles from './button.module.css';

interface IButtonProps {
	children: string;
	className?: string;
	onClick?: () => void;
}

function Button({ children, className, onClick }: IButtonProps) {
	return (
		<button
			onClick={() => onClick?.()}
			className={clsx(styles.button, className)}
		>
			{children}
		</button>
	);
}

export default Button;
