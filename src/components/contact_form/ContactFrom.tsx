'use client';

import React from 'react';
import { Button, Input } from '@/src/ui';
import styles from './contact_form.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ContactForm({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	const [name, setName] = React.useState('');
	return (
		<form action='#' className={styles.form}>
			<Input
				id='name'
				value={name}
				onChange={setName}
				placeholder={data.contact_name[lang]}
				className={styles.input_name}
			/>
			<Input
				id='email'
				placeholder={data.contact_phone[lang]}
				type='phone'
				className={styles.input_email}
			/>
			<Button className={styles.submit}>{data.contact_send[lang]}</Button>
		</form>
	);
}

export default ContactForm;
