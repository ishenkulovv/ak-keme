import Image from 'next/image';
import styles from './contact.module.css';
import global from '@/src/styles/global_styles.module.css';
import clsx from 'clsx';
import { ContactForm, Info } from '@/src/components';

function Contact() {
	return (
		<section className={styles.contact}>
			<div className={clsx(global.container, styles.container)}>
				<div className={styles.form_block}>
					<div className={styles.form_data}>
						<h2 className={styles.title}>Остались вопросы?</h2>
						<p className={styles.descr}>
							Заполните заявку и мы свяжемся с вами в ближайшее время
						</p>
						<ContactForm />
					</div>
					<Image
						src='/images/contact-1.png'
						alt='Image'
						className={styles.image}
						width='480'
						height='580'
					/>
				</div>
				<div className={styles.info_block}>
					<Image
						src='/images/contact-2.png'
						alt='Image'
						className={styles.image}
						width='480'
						height='580'
					/>
					<div className={styles.info}>
						<Info />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
