import Image from 'next/image';
import styles from './contact.module.css';
import global from '@/src/styles/global_styles.module.css';
import clsx from 'clsx';
import { ContactForm } from '@/src/components';
import { formattedText } from '@/src/utils/formattedText';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Contact({ data, lang = 'ru' }: { data: any; lang?: 'ru' | 'kg' }) {
	return (
		<section className={styles.contact}>
			<div className={clsx(global.container, styles.container)}>
				<div className={styles.form_block}>
					<div className={styles.form_data}>
						<h2 className={styles.title}>{data.title[lang]}</h2>
						<p
							className={styles.descr}
							dangerouslySetInnerHTML={{
								__html: formattedText(data.content[lang]),
							}}
						/>
						<ContactForm data={data} lang={lang} />
					</div>
					<Image
						src='/images/contact-1.png'
						alt='Image'
						className={styles.image}
						width='480'
						height='580'
					/>
				</div>
				{/* <div className={styles.info_block}>
					<Image
						src='/images/contact-2.png'
						alt='Image'
						className={styles.image}
						width='480'
						height='580'
					/>
					<div className={styles.info}>
						<Info data={data} lang={lang} />
					</div>
				</div> */}
			</div>
		</section>
	);
}

export default Contact;
