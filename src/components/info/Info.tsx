import styles from './styles.module.css';

function Info() {
	return (
		<>
			<p className={styles.contact_text}>
				<span>Адрес:</span> Бишкек, ул. Тыныстанова, 12
			</p>
			<p className={styles.contact_text}>Пн-Вс 09:00-21:00 </p>
			<p className={styles.contact_text}>
				<span>Телефон:</span> +996 700 123 456
			</p>
			<p className={styles.contact_text}>
				<span>Почта:</span> <a href='$'>akkeme@mail.com</a>
			</p>
		</>
	);
}

export default Info;
