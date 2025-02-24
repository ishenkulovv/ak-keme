'use client';

import React from 'react';
import styles from './input.module.css';
import clsx from 'clsx';

interface InputProps {
	id: string;
	placeholder?: string;
	type?: string;
	value?: string;
	onChange?: (text: string) => void;
	className?: string;
}

function Input({
	id,
	placeholder = 'Текст',
	type = 'text',
	value = '',
	onChange,
	className,
}: InputProps) {
	const [isFocused, setIsFocused] = React.useState(false);
	return (
		<div className={clsx(styles.input_wrapper, className)}>
			<label
				htmlFor={id}
				className={clsx(
					styles.placeholder,
					isFocused || value.length > 0 ? styles.focused : ''
				)}
			>
				<span>{placeholder}</span>
			</label>
			<input
				id={id}
				type={type}
				value={value}
				onChange={e => onChange?.(e.target.value)}
				className={styles.input}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</div>
	);
}

export default Input;
