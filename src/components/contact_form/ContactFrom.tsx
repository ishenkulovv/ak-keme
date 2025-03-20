'use client';

import React from 'react';
import { Button, Input } from '@/src/ui';
import styles from './contact_form.module.css';
import { sendContactData } from '@/src/api/sendContact';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // 👈 Подключаем стили
import './style.css';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ContactForm({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [country, setCountry] = React.useState('kg');

	React.useEffect(() => {
		const fetchCountryCode = async () => {
			try {
				const response = await axios.get(
					'https://ipinfo.io/json?token=dc58db710c5bda'
				); // Вставь свой токен
				const countryCode = response.data.country.toLowerCase();
				setCountry(countryCode); // Установка полученного кода страны
			} catch (error) {
				console.error('Ошибка при получении страны по IP:', error);
				setCountry('kg'); // fallback на Кыргызстан
			}
		};

		fetchCountryCode();
	}, []);

	const resetForm = () => {
		setName('');
		setPhone('');
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!name.length || !phone.length) {
			return;
		}
		try {
			await sendContactData(name, phone);
			resetForm();
		} catch (error) {
			console.error('Ошибка при отправке данных:', error);
		}
	};

	return (
		<form
			action='#'
			className={styles.form}
			onSubmit={handleSubmit}
			data-lenis-ignore
		>
			<Input
				id='name'
				value={name}
				onChange={setName}
				placeholder={data.contact_name[lang]}
				className={styles.input_name}
			/>
			<PhoneInput
				country={country}
				value={phone}
				onChange={setPhone}
				placeholder='+996 555 123 456'
				inputClass='phone_input'
				containerClass='phone_container'
				buttonClass='phone_button'
			/>
			<Button type='submit' className={styles.submit}>
				{data.contact_send[lang]}
			</Button>
		</form>
	);
}

export default ContactForm;
