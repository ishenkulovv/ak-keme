'use client';

import clsx from 'clsx';
import styles from './button.module.css';

interface IButtonProps {
	children: string;
	className?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

function Button({
	children,
	className,
	onClick,
	type = 'button',
}: IButtonProps) {
	return (
		<button
			type={type}
			onClick={() => onClick?.()}
			className={clsx(styles.button, className)}
		>
			{children}
		</button>
	);
}

export default Button;
