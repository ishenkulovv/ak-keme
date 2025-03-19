import styles from './styles.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Info({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<>
			<p className={styles.contact_text}>
				<span>{data?.address_key[lang]}</span> {data?.address}
			</p>
			<p className={styles.contact_text}>{data?.open_time_text[lang]}</p>
			<p className={styles.contact_text}>
				<span>{data?.phone_key[lang]}</span> {data?.phone}
			</p>
			<p className={styles.contact_text}>
				<span>Почта:</span> <a href='mail:akkeme@mail.com'>{data?.email}</a>
			</p>
		</>
	);
}

export default Info;
