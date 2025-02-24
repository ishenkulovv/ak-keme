'use client';

import React from 'react';
import { Button, Input } from '@/src/ui';
import styles from './contact_form.module.css';

function ContactForm() {
	const [name, setName] = React.useState('');
	return (
		<form action='#' className={styles.form}>
			<Input
				id='name'
				value={name}
				onChange={setName}
				placeholder='Ваше имя'
				className={styles.input_name}
			/>
			<Input
				id='email'
				placeholder='Ваше почта'
				type='email'
				className={styles.input_email}
			/>
			<Button className={styles.submit}>Отправить</Button>
		</form>
	);
}

export default ContactForm;
